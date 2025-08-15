import { NextRequest, NextResponse } from 'next/server'

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

    // Google Apps Script Web App URL - you'll need to replace this with your actual URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google Script URL not configured')
      // For now, just log the data and return success
      console.log('Waitlist signup:', { email, referralSource, timestamp })
      return NextResponse.json({ success: true })
    }

    // Send data to Google Sheets via Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        referralSource: referralSource || 'Not specified',
        timestamp,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to submit to waitlist' },
      { status: 500 }
    )
  }
}