// Google Apps Script for Hamilton Wedding RSVP
// Instructions:
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Replace the default code with this script
// 4. Create a Google Sheet with columns: Timestamp, Name, Surname, Attendance, Halal, Full Name
// 5. Update the SHEET_ID and SHEET_NAME variables below
// 6. Deploy as a web app with execute permissions for "Anyone"

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your actual Google Sheet ID
const SHEET_NAME = 'RSVP Responses'; // Replace with your sheet name

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.surname || !data.attendance || !data.halal) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Missing required fields' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Prepare the row data
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.name,
      data.surname,
      data.attendance,
      data.halal,
      `${data.name} ${data.surname}` // Full Name
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'RSVP submitted successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        error: 'Internal server error',
        details: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the setup
function testFunction() {
  const testData = {
    name: 'Test',
    surname: 'User',
    attendance: 'yes',
    halal: 'no'
  };
  
  const result = doPost({
    postData: {
      contents: JSON.stringify(testData)
    }
  });
  
  console.log('Test result:', result.getContent());
}

