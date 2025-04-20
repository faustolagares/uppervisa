"use client"

import type React from "react"
import { useState } from "react"
// Removed unused import: import { useLanguage } from "./language-provider"

// Visa types for dropdown
const visaTypes = [
  { value: "tourist", label: "Tourist Visa (B-2)" },
  { value: "business", label: "Business Visa (B-1)" },
  { value: "work", label: "Work Visa (H-1B, L-1, O-1, etc.)" },
  { value: "student", label: "Student Visa (F-1, M-1)" },
  { value: "family", label: "Family-Based Immigration" },
  { value: "investment", label: "Investment Visa (EB-5)" },
  { value: "green-card", label: "Green Card Application" },
  { value: "citizenship", label: "Citizenship & Naturalization" },
  { value: "other", label: "Other Immigration Services" },
]

// Immigration status options
const immigrationStatuses = [
  { value: "citizen", label: "U.S. Citizen" },
  { value: "permanent-resident", label: "Permanent Resident (Green Card Holder)" },
  { value: "visa-holder", label: "Current Visa Holder" },
  { value: "no-status", label: "No Current U.S. Immigration Status" },
  { value: "pending", label: "Pending Application" },
]

export default function ContactForm({}: /* Removed unused prop: locale */ { locale: string }) {
  // Removed unused variable: const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryOfOrigin: "",
    visaType: "",
    immigrationStatus: "",
    message: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitWarning, setSubmitWarning] = useState("")
  // Removed unused state: const [isPreviewMode, setIsPreviewMode] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  // Modifique a função handleSubmit para simplificar o envio
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitWarning("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.error) {
        throw new Error(result.error.message || "Failed to send message")
      }

      // Success
      setSubmitSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        countryOfOrigin: "",
        visaType: "",
        immigrationStatus: "",
        message: "",
        agreeToTerms: false,
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : "There was an error submitting your inquiry. Please try again or contact us directly at hello@uppervisa.com",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 md:p-8 shadow-sm rounded-lg">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">Send Us a Message</h2>

      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
          <p className="font-medium">Thank you for contacting us!</p>
          {/* Removed preview mode logic */}
          <p>We have received your inquiry and will get back to you within 24-48 hours.</p>

          {submitWarning && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded">
              <p className="text-sm font-medium">Note: {submitWarning}</p>
              <p className="text-sm mt-1">
                If you don't receive a confirmation email, please contact us directly at hello@uppervisa.com
              </p>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Immigration Specific Information */}
          <div>
            <label htmlFor="countryOfOrigin" className="block text-sm font-medium text-gray-700 mb-1">
              Country of Origin *
            </label>
            <input
              type="text"
              id="countryOfOrigin"
              name="countryOfOrigin"
              required
              value={formData.countryOfOrigin}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="visaType" className="block text-sm font-medium text-gray-700 mb-1">
                Visa Type of Interest *
              </label>
              <select
                id="visaType"
                name="visaType"
                required
                value={formData.visaType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="" disabled>
                  Select a visa type
                </option>
                {visaTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="immigrationStatus" className="block text-sm font-medium text-gray-700 mb-1">
                Current Immigration Status
              </label>
              <select
                id="immigrationStatus"
                name="immigrationStatus"
                value={formData.immigrationStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="" disabled>
                  Select your status
                </option>
                {immigrationStatuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder="Please describe your immigration needs or questions..."
            ></textarea>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              required
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
              I agree that my submitted data is being collected and stored. For details on how we use your information,
              please see our{" "}
              <a href="#" className="text-red-600 hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
              <p className="font-medium">Error:</p>
              <p>{submitError}</p>
              <p className="mt-2 text-sm">If the problem persists, please email us directly at hello@uppervisa.com</p>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
