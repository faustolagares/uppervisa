"use client"

import type React from "react"

import { useState, useEffect } from "react"
// Removed unused import: import { useLanguage } from "./language-provider"
import { Calendar, FileText } from "lucide-react"

// Removed unused constant: consultationTypes
// Removed unused constant: consultationTopics

export default function AppointmentForm({}: /* Removed unused prop: locale */ { locale: string }) {
  // Removed unused variable: const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consultationType: "in-person",
    consultationTopic: "",
    preferredDate: "",
    preferredTime: "",
    alternateDate: "",
    alternateTime: "",
    message: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    // Only load the script if we're on step 1
    if (currentStep === 1) {
      const script = document.createElement("script")
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js"
      script.async = true
      script.id = "tidycal-script"

      // Only append the script if it doesn't already exist
      if (!document.getElementById("tidycal-script")) {
        document.body.appendChild(script)
      }

      return () => {
        // Clean up the script when component unmounts or step changes
        const existingScript = document.getElementById("tidycal-script")
        if (existingScript) {
          document.body.removeChild(existingScript)
        }
      }
    }
  }, [currentStep])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setSubmitSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        consultationType: "in-person",
        consultationTopic: "",
        preferredDate: "",
        preferredTime: "",
        alternateDate: "",
        alternateTime: "",
        message: "",
        agreeToTerms: false,
      })
    } catch { // Remove unused error variable
      setSubmitError("There was an error submitting your appointment request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 md:p-8 shadow-sm rounded-lg">
      <h2 className="text-2xl font-medium text-gray-900 mb-6 text-center">Schedule Your Consultation</h2>

      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md">
          <h3 className="text-xl font-medium mb-4">Appointment Request Received!</h3>
          <p className="mb-4">
            Thank you for scheduling a consultation with UpperVisa. We have received your appointment request and will
            confirm your consultation shortly.
          </p>
          <p className="mb-6">
            A confirmation email has been sent to your email address with all the details of your appointment.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Schedule Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div id="tidycal-container">
                <div className="tidycal-embed" data-path="faustolagares/consulta"></div>
              </div>
            </div>
          )}

          {/* Step 2: Appointment Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">
                  <Calendar size={20} />
                </div>
                <h3 className="text-xl font-medium">Appointment Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="alternateDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Alternate Date
                  </label>
                  <input
                    type="date"
                    id="alternateDate"
                    name="alternateDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.alternateDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="alternateTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Alternate Time
                  </label>
                  <select
                    id="alternateTime"
                    name="alternateTime"
                    value={formData.alternateTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Next: Additional Information
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">
                  <FileText size={20} />
                </div>
                <h3 className="text-xl font-medium">Additional Information</h3>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Please provide any additional information about your immigration needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Include any specific questions or concerns you'd like to discuss during your consultation..."
                ></textarea>
              </div>

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
                  I agree that my submitted data is being collected and stored. For details on how we use your
                  information, please see our{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">{submitError}</div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
