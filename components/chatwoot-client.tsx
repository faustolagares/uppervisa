"use client"

import { useEffect } from "react"

export default function ChatwootClient() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      // Set Chatwoot settings
      window.chatwootSettings = {
        hideMessageBubble: false,
        position: "right",
        locale: "pt-BR",
        type: "standard",
        launcherTitle: "Chat com a gente",
      }

      // Load Chatwoot SDK
      const loadChatwoot = () => {
        try {
          const BASE_URL = "https://one.nexlink.ai"
          const script = document.createElement("script")
          script.src = `${BASE_URL}/packs/js/sdk.js`
          script.async = true
          script.defer = true

          script.onload = () => {
            console.log("Chatwoot SDK loaded in client component")
            try {
              window.chatwootSDK.run({
                websiteToken: "s7rELz3R7WWrvjwW8XNmyY6P",
                baseUrl: BASE_URL,
              })
              console.log("Chatwoot initialized in client component")
            } catch (e) {
              console.error("Chatwoot client initialization error:", e)
            }
          }

          script.onerror = () => {
            console.error("Failed to load Chatwoot SDK in client component")
          }

          document.body.appendChild(script)
        } catch (e) {
          console.error("Error in client Chatwoot setup:", e)
        }
      }

      // Load after a short delay to ensure DOM is fully loaded
      setTimeout(loadChatwoot, 1000)
    }
  }, [])

  return null
}
