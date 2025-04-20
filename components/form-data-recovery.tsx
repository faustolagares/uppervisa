"use client"

import { useState, useEffect } from "react"

// Define the type for the form data
interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  countryOfOrigin: string
  visaType: string
  immigrationStatus?: string
  message: string
  agreeToTerms: boolean
  timestamp: string // Add timestamp field
}

export default function FormDataRecovery() {
  const [hasBackup, setHasBackup] = useState(false)
  const [showBackup, setShowBackup] = useState(false)
  const [backupData, setBackupData] = useState<ContactFormData | null>(null) // Use defined type

  useEffect(() => {
    // Check if there's a backup in localStorage
    const backup = localStorage.getItem("contactFormBackup")
    if (backup) {
      try {
        const data = JSON.parse(backup) as ContactFormData // Add type assertion
        // Only show if the backup is less than 24 hours old
        const backupTime = new Date(data.timestamp).getTime()
        const now = new Date().getTime()
        const hoursSinceBackup = (now - backupTime) / (1000 * 60 * 60)

        if (hoursSinceBackup < 24) {
          setHasBackup(true)
          setBackupData(data)
        } else {
          // Clear old backups
          localStorage.removeItem("contactFormBackup")
        }
      } catch (e) {
        console.error("Error parsing backup data:", e)
        localStorage.removeItem("contactFormBackup")
      }
    }
  }, [])

  const clearBackup = () => {
    localStorage.removeItem("contactFormBackup")
    setHasBackup(false)
    setShowBackup(false)
  }

  if (!hasBackup) return null

  return (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-blue-800 font-medium">We found a saved copy of your previous form submission.</p>

      {!showBackup ? (
        <div className="mt-2 flex gap-2">
          <button
            onClick={() => setShowBackup(true)}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            View Saved Data
          </button>
          <button
            onClick={clearBackup}
            className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300"
          >
            Clear Saved Data
          </button>
        </div>
      ) : (
        <div className="mt-3">
          {/* Add null check for backupData */}
          {backupData && (
            <>
              <div className="bg-white p-4 rounded border border-blue-100 mb-3 text-sm">
                <p>
                  <strong>Name:</strong> {backupData.firstName} {backupData.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {backupData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {backupData.phone || "Not provided"}
                </p>
                <p>
                  <strong>Country of Origin:</strong> {backupData.countryOfOrigin}
                </p>
                <p>
                  <strong>Visa Type:</strong> {backupData.visaType}
                </p>
                <p>
                  <strong>Immigration Status:</strong> {backupData.immigrationStatus || "Not provided"}
                </p>
                <p>
                  <strong>Message:</strong>
                </p>
                <p className="whitespace-pre-wrap">{backupData.message}</p>
                <p className="text-xs text-gray-500 mt-2">Saved on: {new Date(backupData.timestamp).toLocaleString()}</p>
              </div>
              <button
                onClick={clearBackup}
                className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300"
              >
                Clear Saved Data
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
