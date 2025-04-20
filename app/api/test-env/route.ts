import { NextResponse } from "next/server"

export async function GET() {
  const hasApiKey = !!process.env.RESEND_API_KEY

  return NextResponse.json({
    hasResendApiKey: hasApiKey,
    message: hasApiKey
      ? "RESEND_API_KEY environment variable is available"
      : "RESEND_API_KEY environment variable is missing",
  })
}
