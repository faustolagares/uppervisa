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
    <Script
      id="chatwoot-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (function(d,t) {
            var BASE_URL="https://one.nexlink.ai";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 's7rELz3R7WWrvjwW8XNmyY6P',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");
        `,
      }}
    />
  )
}
