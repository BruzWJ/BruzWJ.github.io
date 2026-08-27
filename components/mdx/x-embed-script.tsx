"use client"

import Script from "next/script"

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void
      }
    }
  }
}

export function XEmbedScript() {
  return (
    <Script
      async
      src="https://platform.x.com/widgets.js"
      onReady={() => window.twttr?.widgets?.load()}
    />
  )
}
