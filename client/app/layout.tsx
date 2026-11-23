import type { Metadata} from "next"
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav/nav"

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})


export const metadata: Metadata = {
  title: {
    template: "%s | Shop Template",
    default: "Shop Template",
  },
  description:"Shop storefront template with admin dashboard built with Next.js, Express, and PostgreSQL.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        manropeHeading.variable
      )}
    >
      <body className="flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <Nav/>
            <main className="flex flex-1 flex-col min-w-0">
               {children}
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
