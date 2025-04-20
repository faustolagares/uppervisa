"use client"

import { useEffect } from "react"

export default function ChatwootDebugger() {
  useEffect(() => {
    // Check if Chatwoot SDK is loaded
    const checkChatwoot = () => {
      console.log("Checking Chatwoot status...")

      // Check if the SDK object exists
      if (window.chatwootSDK) {
        console.log("Chatwoot SDK found in window object")
      } else {
        console.warn("Chatwoot SDK not found in window object")
      }

      // Check for widget elements
      const widgetElement = document.getElementById("chatwoot-widget")
      if (widgetElement) {
        console.log("Chatwoot widget element found:", widgetElement)
      } else {
        console.warn("Chatwoot widget element not found in DOM")
      }

      // Check for bubble elements
      const bubbleElements = document.querySelectorAll(".woot-widget-bubble")
      if (bubbleElements.length > 0) {
        console.log("Chatwoot bubble elements found:", bubbleElements.length)
      } else {
        console.warn("No Chatwoot bubble elements found in DOM")
      }

      // Check for any elements with chatwoot in the class or id
      const chatwootElements = document.querySelectorAll(
        '[id*="chatwoot"], [class*="chatwoot"], [id*="woot"], [class*="woot"]',
      )
      if (chatwootElements.length > 0) {
        console.log("Found elements related to Chatwoot:", chatwootElements.length)
        chatwootElements.forEach((el) => {
          console.log("- Element:", el.tagName, el.id, Array.from(el.classList).join("."))
        })
      } else {
        console.warn("No elements related to Chatwoot found in DOM")
      }
    }

    // Run the check after a delay to allow scripts to load
    setTimeout(checkChatwoot, 3000)

    // Try to manually initialize Chatwoot if it exists but might not have initialized
    setTimeout(() => {
      if (window.chatwootSDK && typeof window.chatwootSDK.run === "function") {
        try {
          console.log("Attempting manual Chatwoot initialization...")
          window.chatwootSDK.run({
            websiteToken: "s7rELz3R7WWrvjwW8XNmyY6P",
            baseUrl: "https://one.nexlink.ai",
          })
        } catch (e) {
          console.error("Manual Chatwoot initialization failed:", e)
        }
      }
    }, 5000)
  }, [])

  return null // This component doesn't render anything
}
