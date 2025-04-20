import { NextResponse } from "next/server"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import { createContactSubmission } from "@/lib/strapiClient"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, countryOfOrigin, visaType, immigrationStatus, message, ...otherFields } = body

    // 1. Send email via Resend
    let emailData = null
    let emailError = null
    
    try {
      const emailResult = await resend.emails.send({
        from: "UpperVisa <onboarding@resend.dev>",
        to: ["hello@uppervisa.com"],
        subject: "New Contact Form Submission",
        react: EmailTemplate({
          firstName: firstName || '',
          lastName: lastName || '',
          email: email || '',
          phone: phone || '',
          countryOfOrigin: countryOfOrigin || '',
          visaType: visaType || '',
          immigrationStatus: immigrationStatus || '',
          message: message || '',
        }) as React.ReactNode,
      })
      
      emailData = emailResult.data
      emailError = emailResult.error
    } catch (error) {
      console.error("Error sending email:", error)
      emailError = error
    }

    // 2. Store submission in Strapi
    let strapiData = null
    let strapiError = null
    
    try {
      // Prepare data for Strapi
      const strapiSubmission = {
        firstName,
        lastName,
        email,
        phone: phone || null,
        countryOfOrigin,
        visaType,
        immigrationStatus: immigrationStatus || null,
        message,
        status: 'new',
        submittedAt: new Date().toISOString(),
        // Include any other fields from the form
        ...otherFields
      }
      
      strapiData = await createContactSubmission(strapiSubmission)
    } catch (error) {
      console.error("Error storing in Strapi:", error)
      strapiError = error
    }

    // Handle various error scenarios
    if (emailError && strapiError) {
      return NextResponse.json({ 
        error: "Failed to send email and store submission",
        details: {
          emailError,
          strapiError
        }
      }, { status: 500 })
    }
    
    if (emailError) {
      return NextResponse.json({ 
        data: strapiData, 
        warning: "Submission saved but email notification failed" 
      })
    }
    
    if (strapiError) {
      return NextResponse.json({ 
        data: emailData, 
        warning: "Email sent but submission storage failed" 
      })
    }

    return NextResponse.json({ 
      data: { 
        emailData, 
        strapiData 
      },
      message: "Form submitted successfully"
    })
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return NextResponse.json({ error }, { status: 500 })
  }
}
