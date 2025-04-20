"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

// Add type declaration for chatwootSDK
declare global {
  interface Window {
    chatwootSettings: any;
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

export default function OptimizedChatwoot() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      <Script
        id="chatwoot-settings"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.chatwootSettings = {
              hideMessageBubble: false,
              position: "right",
              locale: "pt-BR",
              type: "standard",
              launcherTitle: "Chat com a gente",
            };
          `,
        }}
      />
      <Script
        id="chatwoot-sdk"
        src="https://one.nexlink.ai/packs/js/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          try {
            window.chatwootSDK.run({
              websiteToken: "s7rELz3R7WWrvjwW8XNmyY6P",
              baseUrl: "https://one.nexlink.ai",
            });
          } catch (e) {
            console.error("Chatwoot initialization error:", e);
          }
        }}
      />
    </>
  )
}
