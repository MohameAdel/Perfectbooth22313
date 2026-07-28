/**
 * Perfect Booth - Contact Form Google Apps Script Web App Integration
 * Spreadsheet ID: 1gi59wtflLTmzyUj6DOA1-nntMkWnGupoeu7ati7Q3Ec
 * Tab Name: طلبات العملاء
 * Timezone: Africa/Cairo
 */

const SPREADSHEET_ID = "1gi59wtflLTmzyUj6DOA1-nntMkWnGupoeu7ati7Q3Ec";
const SHEET_NAME = "طلبات العملاء";
const TIMEZONE = "Africa/Cairo";

/**
 * Health Check Endpoint
 */
function doGet(e) {
  const response = {
    ok: true,
    service: "perfect-booth-contact-webhook"
  };
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Formula Injection Protection
 */
function sanitizeSheetValue(value) {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (/^[=\+\-@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

/**
 * Webhook Handler for Contact Form Submissions
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: "invalid_payload" });
    }

    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return jsonResponse({ ok: false, error: "invalid_json" });
    }

    // 1. Secret Authentication
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("FORM_SECRET") || "PB2026_Secure_Key_x9K2mW";
    if (!expectedSecret || data.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "unauthorized" });
    }

    // 2. Honeypot check
    if (data.website && String(data.website).trim() !== "") {
      return jsonResponse({ ok: true });
    }

    // 3. Required Fields & Sanitization
    const fullName = data.fullName ? String(data.fullName).trim() : "";
    const email = data.email ? String(data.email).trim() : "";
    const phone = data.phone ? String(data.phone).trim() : "";
    const service = data.service ? String(data.service).trim() : "";
    const timeline = data.timeline ? String(data.timeline).trim() : "";

    if (!fullName || !email || !phone || !service || !timeline) {
      return jsonResponse({ ok: false, error: "validation_error" });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return jsonResponse({ ok: false, error: "validation_error" });
    }

    // Length limit checks
    const company = data.company ? String(data.company).trim() : "";
    const eventLocation = data.eventLocation ? String(data.eventLocation).trim() : "";
    const projectDetails = data.projectDetails ? String(data.projectDetails).trim() : "";

    if (
      fullName.length > 120 ||
      company.length > 160 ||
      email.length > 254 ||
      phone.length > 40 ||
      service.length > 150 ||
      timeline.length > 150 ||
      eventLocation.length > 250 ||
      projectDetails.length > 5000
    ) {
      return jsonResponse({ ok: false, error: "validation_error" });
    }

    // 4. Thread-Safe Concurrency Lock
    const lock = LockService.getScriptLock();
    try {
      const hasLock = lock.tryLock(10000);
      if (!hasLock) {
        return jsonResponse({ ok: false, error: "server_busy" });
      }

      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      ss.setSpreadsheetTimeZone(TIMEZONE);

      const sheet = ss.getSheetByName(SHEET_NAME);
      if (!sheet) {
        return jsonResponse({ ok: false, error: "sheet_not_found" });
      }

      // Verify Column Headers in Row 1 (A to L)
      const expectedHeaders = [
        "تاريخ ووقت الإرسال",
        "الاسم الكامل *",
        "الشركة أو المؤسسة",
        "البريد الإلكتروني *",
        "رقم الهاتف *",
        "الخدمة المطلوبة *",
        "موعد أو مدة التنفيذ *",
        "مكان الفعالية",
        "تفاصيل المشروع",
        "مصدر الطلب",
        "حالة المتابعة",
        "ملاحظات داخلية"
      ];

      const actualHeaders = sheet.getRange(1, 1, 1, 12).getValues()[0];
      for (let i = 0; i < expectedHeaders.length; i++) {
        if (String(actualHeaders[i]).trim() !== expectedHeaders[i]) {
          return jsonResponse({ 
            ok: false, 
            error: "header_mismatch",
            details: "Column " + (i + 1) + " mismatch"
          });
        }
      }

      // Build row data array (Columns A to L)
      const newRow = [
        new Date(),                         // A: submittedAt (Date Object)
        sanitizeSheetValue(fullName),       // B: fullName
        sanitizeSheetValue(company),        // C: company
        sanitizeSheetValue(email),          // D: email
        sanitizeSheetValue(phone),          // E: phone
        sanitizeSheetValue(service),        // F: service
        sanitizeSheetValue(timeline),       // G: timeline
        sanitizeSheetValue(eventLocation),  // H: eventLocation
        sanitizeSheetValue(projectDetails), // I: projectDetails
        "Website",                          // J: مصدر الطلب
        "جديد",                             // K: حالة المتابعة
        ""                                  // L: ملاحظات داخلية
      ];

      sheet.appendRow(newRow);

      return jsonResponse({ ok: true });

    } finally {
      lock.releaseLock();
    }

  } catch (err) {
    Logger.log("Error in doPost: " + err.toString());
    return jsonResponse({ ok: false, error: "server_error" });
  }
}

/**
 * Helper to return JSON Response with CORS headers
 */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * One-time setup function to initialize tabs, headers, formatting, validation rules, and summary formulas.
 */
function setupSpreadsheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  ss.setSpreadsheetTimeZone(TIMEZONE);

  // 1. Ensure required tabs exist
  const requiredTabs = ["طلبات العملاء", "الملخص", "دليل الربط", "قوائم"];
  requiredTabs.forEach(function(tabName) {
    let sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      ss.insertSheet(tabName);
    }
  });

  // 2. Setup "طلبات العملاء" Headers and Formatting
  const customerSheet = ss.getSheetByName("طلبات العملاء");
  const headers = [
    "تاريخ ووقت الإرسال",
    "الاسم الكامل *",
    "الشركة أو المؤسسة",
    "البريد الإلكتروني *",
    "رقم الهاتف *",
    "الخدمة المطلوبة *",
    "موعد أو مدة التنفيذ *",
    "مكان الفعالية",
    "تفاصيل المشروع",
    "مصدر الطلب",
    "حالة المتابعة",
    "ملاحظات داخلية"
  ];

  if (customerSheet.getLastRow() === 0) {
    customerSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  // Set Column A date-time format
  customerSheet.getRange("A2:A").setNumberFormat("yyyy-mm-dd hh:mm:ss");

  // 3. Setup "قوائم" sheet data
  const listsSheet = ss.getSheetByName("قوائم");
  if (listsSheet.getLastRow() === 0) {
    listsSheet.getRange(1, 1, 8, 2).setValues([
      ["حالة المتابعة", "مصدر الطلب"],
      ["جديد", "Website"],
      ["تم التواصل", "WhatsApp"],
      ["قيد المتابعة", "مباشر"],
      ["تم إرسال عرض", ""],
      ["تم التعاقد", ""],
      ["مغلق", ""],
      ["", ""]
    ]);
  }

  // Apply Data Validations
  const sourceValidation = SpreadsheetApp.newDataValidation()
    .requireValueInRange(listsSheet.getRange("B2:B4"), true)
    .setAllowInvalid(false)
    .build();
  customerSheet.getRange("J2:J").setDataValidation(sourceValidation);

  const statusValidation = SpreadsheetApp.newDataValidation()
    .requireValueInRange(listsSheet.getRange("A2:A7"), true)
    .setAllowInvalid(false)
    .build();
  customerSheet.getRange("K2:K").setDataValidation(statusValidation);

  // 4. Update "الملخص" Summary Formulas
  const summarySheet = ss.getSheetByName("الملخص");
  summarySheet.getRange("B4").setFormula("=COUNTA('طلبات العملاء'!B2:B)");
  summarySheet.getRange("B5").setFormula("=COUNTIFS('طلبات العملاء'!A2:A,\">=\"&TODAY(),'طلبات العملاء'!A2:A,\"<\"&TODAY()+1)");
  summarySheet.getRange("B6").setFormula("=COUNTIF('طلبات العملاء'!K2:K,\"جديد\")");
  summarySheet.getRange("B7").setFormula("=COUNTIF('طلبات العملاء'!K2:K,\"تم التواصل\")");
  summarySheet.getRange("B8").setFormula("=COUNTIF('طلبات العملاء'!K2:K,\"قيد المتابعة\")");
  summarySheet.getRange("B9").setFormula("=COUNTIF('طلبات العملاء'!K2:K,\"تم إرسال عرض\")");
  summarySheet.getRange("B10").setFormula("=COUNTIF('طلبات العملاء'!K2:K,\"تم التعاقد\")");
  summarySheet.getRange("B11").setFormula("=COUNTIF('طلبات العملاء'!K2:K,\"مغلق\")");

  Logger.log("Setup completed successfully for Spreadsheet: " + SPREADSHEET_ID);
}
