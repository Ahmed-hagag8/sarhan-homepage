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
  preload: true,
  fallback: ["system-ui", "arial"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["Courier New", "monospace"],
});

const BASE_URL = "https://sarhan-trade.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SARHAN — Import & Export | International Trade & Logistics",
    template: "%s | SARHAN Import & Export",
  },
  description:
    "SARHAN Import & Export — premium international commodity trading, shipping, and logistics. Supplying natural flax fiber, linen products, and agricultural commodities to global textile manufacturers.",
  keywords: [
    "SARHAN",
    "import",
    "export",
    "shipping",
    "flax fiber",
    "linen",
    "international trade",
    "commodity trading",
    "logistics",
    "Egypt export",
    "natural fiber",
  ],
  authors: [{ name: "SARHAN Import & Export" }],
  creator: "SARHAN Import & Export",
  publisher: "SARHAN Import & Export",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG", "fr_FR", "zh_CN"],
    url: BASE_URL,
    siteName: "SARHAN Import & Export",
    title: "SARHAN — International Trade & Logistics",
    description:
      "Premium international commodity trading, shipping, and logistics. Supplying natural flax fiber, linen products, and agricultural commodities to global textile manufacturers.",
    images: [
      {
        url: "/sarhan-logo.png",
        width: 1200,
        height: 630,
        alt: "SARHAN Import & Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARHAN — International Trade & Logistics",
    description:
      "Premium international commodity trading, shipping, and logistics. Natural flax fiber & linen for global textile manufacturers.",
    images: ["/sarhan-logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": `${BASE_URL}`,
      "ar-EG": `${BASE_URL}`,
      "fr-FR": `${BASE_URL}`,
      "zh-CN": `${BASE_URL}`,
    },
  },
  icons: {
    icon: [
      { url: "/sarhan-logo.png", type: "image/png" },
    ],
    apple: "/sarhan-logo.png",
  },
  verification: {
    google: "SARHAN-google-verification-placeholder",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SARHAN Import & Export",
  url: "https://sarhan-trade.com",
  logo: "https://sarhan-trade.com/sarhan-logo.png",
  description:
    "Premium international commodity trading, shipping, and logistics. Supplying natural flax fiber, linen products, and agricultural commodities to global textile manufacturers.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    availableLanguage: ["English", "Arabic", "French", "Chinese"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
