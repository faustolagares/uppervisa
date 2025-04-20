"use client"

import { useState, useEffect } from "react"
import { getContactFormSchema } from "@/lib/strapiClient"

type FormField = {
  name: string
  type: string
  required: boolean
  label: string
  options?: { value: string; label: string }[]
}

type FormSchema = {
  data: {
    attributes: {
      fields: FormField[]
    }
  }
}

export default function DynamicContactForm() {
  const [formSchema, setFormSchema] = useState<FormSchema | null>(null)
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitWarning, setSubmitWarning] = useState("")

  // Initialize form data with empty values
  useEffect(() => {
    if (formSchema) {
      const initialData: Record<string, any> = {}
      formSchema.data.attributes.fields.forEach((field) => {
        initialData[field.name] = field.type === 'checkbox' ? false : ''
      })
      setFormData(initialData)
    }
  }, [formSchema])

  // Fetch form schema from Strapi
  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const schema = await getContactFormSchema()
        setFormSchema(schema)
      } catch (error) {
        console.error("Error fetching form schema:", error)
        setSubmitError("Failed to load form. Please try again later.")
      }
    }

    fetchSchema()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

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

      if (result.warning) {
        setSubmitWarning(result.warning)
      }

      // Success
      setSubmitSuccess(true)
      
      // Reset form
      if (formSchema) {
        const initialData: Record<string, any> = {}
        formSchema.data.attributes.fields.forEach((field) => {
          initialData[field.name] = field.type === 'checkbox' ? false : ''
        })
        setFormData(initialData)
      }
    } catch (error) {
      console.error("Error sending form:", error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : "There was an error submitting your inquiry. Please try again or contact us directly at hello@uppervisa.com",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render a field based on its type
  const renderField = (field: FormField) => {
    const { name, type, required, label, options } = field

    switch (type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'number':
      case 'date':
        return (
          <div key={name} className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
              {label} {required && '*'}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              required={required}
              value={formData[name] || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>
        )
      
      case 'textarea':
        return (
          <div key={name} className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
              {label} {required && '*'}
            </label>
            <textarea
              id={name}
              name={name}
              rows={5}
              required={required}
              value={formData[name] || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder={`Please enter your ${label.toLowerCase()}...`}
            ></textarea>
          </div>
        )
      
      case 'select':
        return (
          <div key={name} className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
              {label} {required && '*'}
            </label>
            <select
              id={name}
              name={name}
              required={required}
              value={formData[name] || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              <option value="" disabled>
                Select {label.toLowerCase()}
              </option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )
      
      case 'checkbox':
        return (
          <div key={name} className="flex items-start">
            <input
              type="checkbox"
              id={name}
              name={name}
              required={required}
              checked={formData[name] || false}
              onChange={handleCheckboxChange}
              className="mt-1 mr-2"
            />
            <label htmlFor={name} className="text-sm text-gray-600">
              {label}
            </label>
          </div>
        )
      
      default:
        return null
    }
  }

  // Show loading state while fetching schema
  if (!formSchema) {
    return (
      <div className="bg-white p-6 md:p-8 shadow-sm rounded-lg">
        <h2 className="text-2xl font-medium text-gray-900 mb-6">Send Us a Message</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 md:p-8 shadow-sm rounded-lg">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">Send Us a Message</h2>

      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
          <p className="font-medium">Thank you for contacting us!</p>
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
          {/* Group fields into rows of 2 for larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formSchema.data.attributes.fields
              .filter(field => ['text', 'email', 'tel', 'number', 'date', 'select'].includes(field.type))
              .map((field, index) => (
                <div key={field.name} className={index % 2 === 0 && index === formSchema.data.attributes.fields.length - 1 ? "md:col-span-2" : ""}>
                  {renderField(field)}
                </div>
              ))}
          </div>

          {/* Render textarea fields in full width */}
          {formSchema.data.attributes.fields
            .filter(field => field.type === 'textarea')
            .map(field => (
              <div key={field.name}>
                {renderField(field)}
              </div>
            ))}

          {/* Render checkbox fields */}
          {formSchema.data.attributes.fields
            .filter(field => field.type === 'checkbox')
            .map(field => (
              <div key={field.name}>
                {renderField(field)}
              </div>
            ))}

          {/* Add a default terms agreement checkbox if not in schema */}
          {!formSchema.data.attributes.fields.some(field => field.name === 'agreeToTerms') && (
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                required
                checked={formData.agreeToTerms || false}
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
          )}

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
