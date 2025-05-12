import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Spring Advisor Spotlight',
  description: 'Connect with expert advisors in software development, cloud computing, and more.',
  keywords: 'software development, cloud computing, advisors, mentorship, tech consulting'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
