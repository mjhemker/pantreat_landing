import { NextRequest, NextResponse } from 'next/server'

interface WaitlistEntry {
  email: string
  referralSource: string
  timestamp: string
  id: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, referralSource } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Get current timestamp
    const timestamp = new Date().toISOString()
    const formattedTime = new Date(timestamp).toLocaleString('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    // Create entry
    const newEntry: WaitlistEntry = {
      email,
      referralSource: referralSource || 'Not specified',
      timestamp: formattedTime,
      id: Date.now().toString()
    }

    // Log to console (viewable in Vercel function logs)
    console.log('🎉 NEW WAITLIST SIGNUP:', JSON.stringify(newEntry, null, 2))

    // Send to Google Sheets
    await saveToGoogleSheets(newEntry)

    return NextResponse.json({ 
      success: true,
      message: 'Successfully added to waitlist!'
    })
  } catch (error) {
    console.error('Error submitting to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to submit to waitlist' },
      { status: 500 }
    )
  }
}

async function saveToGoogleSheets(entry: WaitlistEntry) {
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

  if (!GOOGLE_SCRIPT_URL) {
    console.log('⚠️  Google Sheets not configured, logging entry:', entry)
    return
  }

  try {
    console.log('📊 Sending to Google Sheets:', GOOGLE_SCRIPT_URL)
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: entry.email,
        referralSource: entry.referralSource,
        timestamp: entry.timestamp,
      }),
    })

    const responseText = await response.text()
    console.log('📊 Google Sheets response:', response.status, responseText)

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status} - ${responseText}`)
    }

    console.log('✅ Successfully saved to Google Sheets')
  } catch (error) {
    console.error('❌ Google Sheets error:', error)
    // Don't throw - we still want to show success to the user
  }
}

// Optional email notification function
// async function sendEmailNotification(entry: WaitlistEntry) {
//   // You can implement email sending here using services like:
//   // - Resend (resend.com)
//   // - SendGrid
//   // - Nodemailer with Gmail
//   // - Vercel's built-in email service
//   
//   console.log('📧 Email notification would be sent for:', entry.email)
// }