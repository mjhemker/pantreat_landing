# 🆕 Fresh Google Sheets Setup for Waitlist

Let's set this up from scratch to ensure it works perfectly.

## Step 1: Create New Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a **new blank sheet**
3. Rename it to "Pantreat Waitlist"
4. In the first row, add these exact headers:
   - **A1**: `Email`
   - **B1**: `Referral Source` 
   - **C1**: `Signup Time`

## Step 2: Create Google Apps Script

1. In your sheet, go to **Extensions → Apps Script**
2. **Delete all existing code** in the editor
3. Paste this fresh code:

```javascript
function doPost(e) {
  console.log('Received request:', e.postData.contents);
  
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Extract fields
    const email = data.email || 'No email';
    const referralSource = data.referralSource || 'Not specified';
    const timestamp = data.timestamp || new Date().toLocaleString();
    
    // Add row to sheet
    sheet.appendRow([email, referralSource, timestamp]);
    console.log('Row added successfully');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Added to sheet' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Save the project** (Ctrl+S or Cmd+S)

## Step 3: Deploy the Script

1. Click **Deploy → New deployment**
2. Click the **gear icon** next to "Type" and select **Web app**
3. Set these **exact** settings:
   - **Description**: Pantreat Waitlist
   - **Execute as**: Me (your-email@gmail.com)
   - **Who has access**: **Anyone** ⚠️ This is critical!
4. Click **Deploy**
5. Click **Authorize access** when prompted
6. **Copy the Web App URL** - it should look like:
   `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

## Step 4: Test Your Script

Before adding to Vercel, test it directly:

1. Use this curl command (replace YOUR_URL with your actual script URL):

```bash
curl -X POST "YOUR_SCRIPT_URL" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","referralSource":"Direct test","timestamp":"Test time"}'
```

2. Check your Google Sheet - a new row should appear!

## Step 5: Add to Vercel

1. Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**
2. **Delete** the old `GOOGLE_SCRIPT_URL` if it exists
3. **Add new**:
   - **Name**: `GOOGLE_SCRIPT_URL`
   - **Value**: Your new Web App URL
   - **Environment**: ✅ Production ✅ Preview ✅ Development

## Step 6: Deploy and Test

The code is already updated to use the new URL. Just push to trigger a fresh deployment:

```bash
git add -A
git commit -m "Set up fresh Google Sheets integration"
git push origin main
```

After deployment, test on your live site!

## 🔍 Debugging

If it still doesn't work, check:
1. **Vercel Function Logs** - look for the 📊 emoji logs
2. **Google Apps Script Logs** - go to Apps Script → Executions
3. **Script URL** - must end with `/exec` not `/dev`

This fresh setup should work perfectly! 🎉