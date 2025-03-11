import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sabih Ullah | React Developer",
  description: "Personal portfolio of Sabih Ullah, a React Developer specializing in modern web technologies.",
  keywords: ["developer", "portfolio", "web development", "react", "next.js", "full stack"],
  authors: [{ name: "Sabih Ullah" }],
  creator: "Sabih Ullah",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

