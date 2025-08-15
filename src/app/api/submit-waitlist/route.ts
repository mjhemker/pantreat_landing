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

    // Create entry
    const newEntry = {
      email,
      referralSource: referralSource || 'Not specified',
      timestamp,
      id: Date.now().toString()
    }

    // Log to console (viewable in Vercel function logs)
    console.log('🎉 NEW WAITLIST SIGNUP:', JSON.stringify(newEntry, null, 2))

    // Optional: Send email notification (uncomment if you want this)
    // await sendEmailNotification(newEntry)

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

// Optional email notification function
async function sendEmailNotification(entry: any) {
  // You can implement email sending here using services like:
  // - Resend (resend.com)
  // - SendGrid
  // - Nodemailer with Gmail
  // - Vercel's built-in email service
  
  console.log('📧 Email notification would be sent for:', entry.email)
}