import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SARHAN — Import & Export",
  description:
    "SARHAN Import & Export — international shipping and custom product solutions. A minimal company landing page.",
  keywords: ["SARHAN", "import", "export", "shipping", "custom product", "international trade"],
  icons: {
    icon: "/sarhan-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
