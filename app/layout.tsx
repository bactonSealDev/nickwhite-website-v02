import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nick White",
  description: "Portfolio of Nick White - Photography, Web Design & Coding, Art & Ideas, Yacon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts (Typekit) */}
        <link rel="stylesheet" href="https://use.typekit.net/nxv7dpf.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
