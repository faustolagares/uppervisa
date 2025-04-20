import type * as React from "react"

interface EmailTemplateProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  countryOfOrigin: string
  visaType: string
  immigrationStatus: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  countryOfOrigin,
  visaType,
  immigrationStatus,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      <strong>Name:</strong> {firstName} {lastName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone || "Not provided"}
    </p>
    <p>
      <strong>Country of Origin:</strong> {countryOfOrigin}
    </p>
    <p>
      <strong>Visa Type:</strong> {visaType}
    </p>
    <p>
      <strong>Immigration Status:</strong> {immigrationStatus || "Not provided"}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
)
