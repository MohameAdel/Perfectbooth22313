# Google Sheets Lead Integration

This document outlines the setup and architecture for integrating the Perfect Booth website forms securely with the target Google Sheet.

## 1. Google Sheets Target
- **Spreadsheet ID:** `1cYhINs7M2qMRFAkyMbUc78RWloS66qPhyumPuj5TIx4`
- **Target worksheet:** `Lead Submissions`
- **Header row:** `6`
- **Exact A:AP column mapping:** See Section 4 below.

## 2. Authentication Setup (Service Account)
The Next.js server connects directly to the Google Sheets API using a dedicated Service Account. This prevents exposing any credentials to the client.

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a Project and enable the **Google Sheets API**.
3. Create a **Service Account** and generate a JSON key.
4. From the generated JSON, you will need the `client_email` and `private_key`.
5. Open the Target Spreadsheet and **share it** with the `client_email` (giving it "Editor" permissions).
6. Do NOT commit the JSON key to the repository.

## 3. Environment Variables
Add these to your production environment (e.g. Vercel Secrets or local `.env`):

```env
GOOGLE_SHEETS_SPREADSHEET_ID=1cYhINs7M2qMRFAkyMbUc78RWloS66qPhyumPuj5TIx4
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
# Remember to correctly format the multiline private key 
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_WORKSHEET_NAME=Lead Submissions
GOOGLE_SHEETS_HEADER_ROW=6
GOOGLE_SHEETS_TIMEOUT_MS=10000
LEADS_IP_HASH_SALT=your-secure-random-string
```

## 4. Exact Column Mapping (A:AP)
| Col | Payload Key | Example Value |
|---|---|---|
| A | submission_id | `uuid-v4-string` |
| B | submitted_at_utc | `2026-07-27T16:15:30.000Z` |
| C | submitted_at_local | null |
| D | form_version | `perfect-booth-contact-v1` |
| E | website_locale | `en` or `ar` |
| F | submission_channel | `Website Form` |
| G | source_page | `/en/contact` |
| H | referrer_url | null |
| I | full_name | `Validated Value` |
| J | company_name | null |
| K | job_title | null |
| L | email | `Validated Value` |
| M | phone | `Validated Value` |
| N | country | null |
| O | city | null |
| P | preferred_contact_method | null |
| Q | preferred_contact_time | null |
| R | service_interest | `Validated Value` |
| S | event_name | null |
| T | event_date | null |
| U | event_location | `Validated Value` or null |
| V | booth_size | null |
| W | budget_range | null |
| X | project_timeline | `Validated Value` |
| Y | requirements_message | `Validated Value` |
| Z | attachment_url | null |
| AA| marketing_consent | null |
| AB| privacy_consent | null |
| AC| utm_source | null |
| AD| utm_medium | null |
| AE| utm_campaign | null |
| AF| utm_term | null |
| AG| utm_content | null |
| AH| user_agent | `Mozilla/5.0...` |
| AI| ip_hash | `sha256-hash` |
| AJ| lead_status | `New` |
| AK| assigned_to | null |
| AL| follow_up_date | null |
| AM| internal_notes | null |
| AN| duplicate_key | `sha256-hash` |
| AO| integration_status| `Sent` |
| AP| integration_error | null |

## 5. Duplicate Prevention & Idempotency
- **Idempotency:** A `duplicate_key` is generated server-side using a hash of the `email` and `service`.
- **Validation:** Before appending, the API fetches the existing `Duplicate Key` column (AN). If the key already exists, the server returns a successful response using the original `submission_id` (preventing duplicate rows).

## 6. Testing & Production Verification
- **Local:** Populate your `.env.local` with the actual Service Account credentials. Submit a test form. Verify exactly one row is added.
- **Failures:** Invalid requests return `400` without checking Sheets. Network failures or Google Sheets errors return `502/504`. The client displays a localized generic error and preserves the user's input.
- **Credential Rotation:** Generate a new key from Google Cloud Console, update `GOOGLE_SHEETS_PRIVATE_KEY` in environment variables, and delete the old key.
