import { ThemeProvider } from "@/components/theme-provider";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Foundation || A New Web3 Experience",
  description:
    "Foundation is designed to usher newcomers into the dynamic world of Web3. With an emphasis on web3 education, practical experience and Campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={cn(
        "min-h-screen background font-sans antialiased",
        fontSans.variable
      )}><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
          {children}
          <Toaster />
        </ThemeProvider></body>
    </html>
  );
}
