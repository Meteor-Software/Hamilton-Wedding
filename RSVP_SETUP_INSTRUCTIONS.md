# Hamilton Wedding RSVP Setup Instructions

## 1. Google Sheets Setup

1. Create a new Google Sheet
2. Name it "Hamilton Wedding RSVP" (or any name you prefer)
3. Create the following columns in row 1:
   - A: Timestamp
   - B: Name
   - C: Surname
   - D: Attendance
   - E: Halal
   - F: Full Name

## 2. Google Apps Script Setup

1. Go to https://script.google.com/
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Update the SHEET_ID and SHEET_NAME variables in the script:
   - SHEET_ID: Copy from your Google Sheet URL (the long string between /d/ and /edit)
   - SHEET_NAME: Use "Sheet1" or whatever your sheet is named
5. Save the project
6. Click "Deploy" > "New deployment"
7. Choose "Web app" as the type
8. Set "Execute as" to "Me"
9. Set "Who has access" to "Anyone"
10. Click "Deploy"
11. Copy the web app URL

## 3. Environment Variables

Create a `.env.local` file in your project root with:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

Replace `YOUR_ACTUAL_SCRIPT_ID` with the ID from your deployed web app URL.

## 4. Test the Setup

1. Start your development server: `npm run dev`
2. Go to your RSVP page
3. Click "RSVP Now" to open the modal
4. Fill out the form and submit
5. Check your Google Sheet to see if the data appears

## 5. Features

- ✅ Modal popup RSVP form
- ✅ Form validation
- ✅ Google Sheets integration
- ✅ Success/error feedback
- ✅ Responsive design
- ✅ Elegant styling matching your wedding theme

## Troubleshooting

- If the form doesn't submit, check the browser console for errors
- If data doesn't appear in Google Sheets, verify the SHEET_ID and SHEET_NAME
- Make sure the Google Apps Script is deployed as a web app with "Anyone" access
- Check that the GOOGLE_SCRIPT_URL environment variable is set correctly

