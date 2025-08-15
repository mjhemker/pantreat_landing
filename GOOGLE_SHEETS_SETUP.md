# 📊 Google Sheets Waitlist Setup

This guide will help you set up automatic email collection to Google Sheets for your Pantreat waitlist.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new sheet called "Pantreat Waitlist"
3. In row 1, add these headers:
   - A1: `Email`
   - B1: `How did you hear about us?`
   - C1: `Signup Time`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the POST data
    const data = JSON.parse(e.postData.contents);
    
    // Extract the fields
    const email = data.email || '';
    const referralSource = data.referralSource || 'Not specified';
    const timestamp = data.timestamp || new Date().toISOString();
    
    // Format timestamp for easier reading
    const formattedTime = new Date(timestamp).toLocaleString('en-US', {
      timeZone: 'America/New_York', // Change to your timezone
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    // Add the data to the sheet
    sheet.appendRow([email, referralSource, formattedTime]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy the Script

1. Click **Deploy > New deployment**
2. Choose **Type: Web app**
3. Set these options:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. **Copy the Web App URL** - you'll need this!

## Step 4: Add URL to Environment Variables

1. In your project root, create/update `.env.local`:
```bash
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
OPENAI_API_KEY=your_existing_key_here
```

2. If deploying to Vercel, add `GOOGLE_SCRIPT_URL` to your environment variables in the Vercel dashboard.

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the waitlist form on your site
3. Submit a test email
4. Check your Google Sheet - the data should appear!

## 🎯 What Gets Saved

Your Google Sheet will automatically collect:
- **Email**: The user's email address
- **How did you hear about us?**: Their selected referral source (or "Not specified")
- **Signup Time**: Formatted timestamp of when they signed up

## 🔧 Troubleshooting

**If emails aren't appearing in your sheet:**
1. Check the Google Apps Script logs for errors
2. Verify the Web App URL is correct in your `.env.local`
3. Make sure the script is deployed with "Anyone" access
4. Check your browser console for API errors

**To view script logs:**
1. Go to your Apps Script project
2. Click **Executions** in the left sidebar
3. View any error messages

## 🚀 Ready to Deploy

Once everything is working locally, make sure to:
1. Add `GOOGLE_SCRIPT_URL` to your hosting provider's environment variables
2. Test the deployed version
3. Your waitlist is ready! 🎉