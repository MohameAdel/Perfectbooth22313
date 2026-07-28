# Perfect Booth Excel Lead Integration

This document outlines the setup and architecture for integrating the Perfect Booth website forms securely with the `Perfect_Booth_Premium_Lead_Management.xlsx` workbook via Microsoft Power Automate (or Azure Logic Apps).

## 1. Workbook Upload Instructions
1. Upload the provided `Perfect_Booth_Premium_Lead_Management.xlsx` workbook to a secure location (e.g., OneDrive for Business or a SharePoint Document Library) connected to the dedicated service account.
2. Ensure the file contains the worksheet exactly named **Lead Submissions** and an Excel Table exactly named **PerfectBoothLeads**.
3. **DO NOT** rename the table or reorder its headers once the Power Automate flow is mapped, as this breaks the automation integration.

## 2. Power Automate Flow Setup
Create an Automated Cloud Flow:
1. **Trigger**: "When an HTTP request is received"
   - Generate a JSON schema (see below) to parse the incoming request body.
2. **Condition**: Check if `LEADS_AUTOMATION_WEBHOOK_SECRET` header (or equivalent) matches your configured secret.
3. **Action**: "Excel Online (Business) - Add a row into a table"
   - Select your Location, Document Library, and the Workbook file.
   - Select the Table: `PerfectBoothLeads`.
   - Map the dynamic content from the trigger to the corresponding Excel columns.
4. **Action (Duplicate Prevention)**: 
   - Before adding the row, you can optionally add a "List rows present in a table" action filtered by `Submission ID` = `submission_id`.
   - If the row already exists, immediately return a `200 OK` response with `{"success": true, "duplicate": true}`.
5. **Response**: Return an HTTP response to the website.
   - Success: `200 OK` with JSON `{"success": true}`.
   - Failure: `4xx` or `5xx` with JSON `{"success": false, "error": "Diagnostic message"}`.

## 3. Expected Request JSON Schema
Use this schema in the HTTP trigger to validate the incoming webhook payload:

```json
{
  "type": "object",
  "properties": {
    "submission_id": { "type": "string" },
    "submitted_at_utc": { "type": "string" },
    "submitted_at_local": { "type": ["string", "null"] },
    "form_version": { "type": "string" },
    "website_locale": { "type": "string" },
    "submission_channel": { "type": "string" },
    "source_page": { "type": "string" },
    "referrer_url": { "type": ["string", "null"] },
    "full_name": { "type": "string" },
    "company_name": { "type": ["string", "null"] },
    "job_title": { "type": ["string", "null"] },
    "email": { "type": "string" },
    "phone": { "type": "string" },
    "country": { "type": ["string", "null"] },
    "city": { "type": ["string", "null"] },
    "preferred_contact_method": { "type": ["string", "null"] },
    "preferred_contact_time": { "type": ["string", "null"] },
    "service_interest": { "type": "string" },
    "event_name": { "type": ["string", "null"] },
    "event_date": { "type": ["string", "null"] },
    "event_location": { "type": ["string", "null"] },
    "booth_size": { "type": ["string", "null"] },
    "budget_range": { "type": ["string", "null"] },
    "project_timeline": { "type": "string" },
    "requirements_message": { "type": ["string", "null"] },
    "attachment_url": { "type": ["string", "null"] },
    "marketing_consent": { "type": ["boolean", "null"] },
    "privacy_consent": { "type": ["boolean", "null"] },
    "utm_source": { "type": ["string", "null"] },
    "utm_medium": { "type": ["string", "null"] },
    "utm_campaign": { "type": ["string", "null"] },
    "utm_term": { "type": ["string", "null"] },
    "utm_content": { "type": ["string", "null"] },
    "user_agent": { "type": ["string", "null"] },
    "ip_hash": { "type": ["string", "null"] },
    "lead_status": { "type": "string" },
    "assigned_to": { "type": ["string", "null"] },
    "follow_up_date": { "type": ["string", "null"] },
    "internal_notes": { "type": ["string", "null"] },
    "duplicate_key": { "type": ["string", "null"] },
    "integration_status": { "type": "string" },
    "integration_error": { "type": ["string", "null"] }
  },
  "required": [
    "submission_id",
    "submitted_at_utc",
    "form_version",
    "full_name",
    "email",
    "phone"
  ]
}
```

## 4. Payload Keys to Excel Headers Mapping
| JSON Payload Key | Excel Column Header |
|------------------|---------------------|
| `submission_id` | Submission ID |
| `submitted_at_utc` | Submitted At (UTC) |
| `submitted_at_local` | Submitted At (Local) |
| `form_version` | Form Version |
| `website_locale` | Website Locale |
| `submission_channel` | Submission Channel |
| `source_page` | Source Page |
| `referrer_url` | Referrer URL |
| `full_name` | Full Name |
| `company_name` | Company Name |
| `job_title` | Job Title |
| `email` | Email |
| `phone` | Phone |
| `country` | Country |
| `city` | City |
| `preferred_contact_method`| Preferred Contact Method |
| `preferred_contact_time` | Preferred Contact Time |
| `service_interest` | Service Interest |
| `event_name` | Event Name |
| `event_date` | Event Date |
| `event_location` | Event Location |
| `booth_size` | Booth Size |
| `budget_range` | Budget Range |
| `project_timeline` | Project Timeline |
| `requirements_message` | Requirements Message |
| `attachment_url` | Attachment URL |
| `marketing_consent` | Marketing Consent |
| `privacy_consent` | Privacy Consent |
| `utm_source` | UTM Source |
| `utm_medium` | UTM Medium |
| `utm_campaign` | UTM Campaign |
| `utm_term` | UTM Term |
| `utm_content` | UTM Content |
| `user_agent` | User Agent |
| `ip_hash` | IP Hash |
| `lead_status` | Lead Status |
| `assigned_to` | Assigned To |
| `follow_up_date` | Follow Up Date |
| `internal_notes` | Internal Notes |
| `duplicate_key` | Duplicate Key |
| `integration_status` | Integration Status |
| `integration_error`| Integration Error |

*Note: Fields not requested by the current form will be explicitly set to `null` by the server.*

## 5. Environment Variables
To connect the Next.js server to the automation endpoint, configure the following secrets in the production environment:
```env
# The HTTP Trigger URL from Power Automate
LEADS_AUTOMATION_WEBHOOK_URL="https://prod-XX.region.logic.azure.com:443/workflows/..."
# Optional shared secret checked by Power Automate to prevent unauthorized triggers
LEADS_AUTOMATION_WEBHOOK_SECRET="your-secure-random-string"
# Timeout in milliseconds (default 10000)
LEADS_AUTOMATION_TIMEOUT_MS="10000"
# Server-only salt used to hash IPs (optional)
LEADS_IP_HASH_SALT="another-secure-random-string"
```

## 6. Authentication and Duplicate Prevention
- **Authentication**: Ensure the HTTP trigger requires Microsoft Entra ID if possible, or enforce a strict checking of the `x-webhook-secret` header matching `LEADS_AUTOMATION_WEBHOOK_SECRET`.
- **Idempotency**: The Next.js server generates a `submission_id` via `crypto.randomUUID()`. If a network failure causes a transient retry, the same `submission_id` is sent again. Power Automate should verify this ID doesn't already exist in the Excel table before inserting to prevent duplicate records.

## 7. Testing and Production Verification
**Local Testing:**
- Provide `.env.local` variables simulating the flow, or point to a sandbox webhook URL.
- Use tools like RequestCatcher or Webhook.site if Power Automate is not ready yet.

**Production Verification:**
- Ensure the production URL is fully operational.
- Submit a test lead named "Automated Test". Verify that EXACTLY one row is inserted into Excel.
- Refresh the Thank You page. Ensure another row is NOT created.
- Ensure all empty fields map safely to empty cells without crashing the flow.

## 8. Failure Recovery
- If the webhook fails to process a request (returns 500, or times out), the website will display a generic error message, preserving form input state.
- The user can retry.
- In severe failure scenarios, monitor server logs using the diagnostic codes provided (e.g., `ERR_WEBHOOK_TIMEOUT`, `ERR_WEBHOOK_500`).
