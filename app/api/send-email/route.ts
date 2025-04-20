import { NextResponse } from "next/server"
import { createContactSubmission } from "@/lib/strapiClient"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, countryOfOrigin, visaType, immigrationStatus, message, ...otherFields } = body

    // Log the form submission (temporary solution until email service is set up)
    console.log("Form submission received:", {
      firstName,
      lastName,
      email,
      phone,
      countryOfOrigin,
      visaType,
      immigrationStatus,
      message,
      ...otherFields
    })

    // Use the placeholder function from strapiClient
    await createContactSubmission({
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
      ...otherFields
    })

    return NextResponse.json({ 
      success: true,
      message: "Form submitted successfully"
    })
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return NextResponse.json({ 
      error: "An error occurred processing your submission"
    }, { status: 500 })
  }
}
