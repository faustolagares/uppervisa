"use client"

import { useEffect, useState } from "react"

export default function OptimizedChatwoot() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load Chatwoot after page is fully loaded and idle
    if (typeof window !== "undefined") {
      // Use requestIdleCallback or setTimeout as fallback
      const onIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 2000))

      onIdle(() => {
        setShouldLoad(true)
      })
    }
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

    // Set Chatwoot settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "pt-BR",
      type: "standard",
      launcherTitle: "Chat com a gente",
    }

    // Load Chatwoot SDK
    try {
      const BASE_URL = "https://one.nexlink.ai"
      const script = document.createElement("script")
      script.src = `${BASE_URL}/packs/js/sdk.js`
      script.async = true
      script.defer = true

      script.onload = () => {
        try {
          window.chatwootSDK.run({
            websiteToken: "s7rELz3R7WWrvjwW8XNmyY6P",
            baseUrl: BASE_URL,
          })
        } catch (e) {
          console.error("Chatwoot initialization error:", e)
        }
      }

      document.body.appendChild(script)
    } catch (e) {
      console.error("Error setting up Chatwoot:", e)
    }
  }, [shouldLoad])

  return null
}
