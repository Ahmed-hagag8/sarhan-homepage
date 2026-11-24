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

const BASE_URL = "https://www.sarhanco.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SARHAN Co. — Import & Export | International Trade & Logistics",
    template: "%s | SARHAN Co.",
  },
  description:
    "SARHAN Co. (sarhanco.com) — premium international commodity trading, shipping, and logistics. Supplying natural flax fiber, linen products, and agricultural commodities to global textile manufacturers.",
  keywords: [
    "sarhanco",
    "sarhanco.com",
    "SARHAN",
    "SARHAN Co",
    "SARHAN Import & Export",
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
  authors: [{ name: "SARHAN Co." }],
  creator: "SARHAN Co.",
  publisher: "SARHAN Co.",
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
    siteName: "SARHAN Co.",
    title: "SARHAN Co. — International Trade & Logistics",
    description:
      "Premium international commodity trading, shipping, and logistics. Supplying natural flax fiber, linen products, and agricultural commodities to global textile manufacturers.",
    images: [
      {
        url: "/sarhan-logo.png",
        width: 1200,
        height: 630,
        alt: "SARHAN Co. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARHAN Co. — International Trade & Logistics",
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sarhanco.com/#website",
      url: "https://sarhanco.com",
      name: "SARHAN Co.",
      alternateName: ["sarhanco", "sarhanco.com", "سرحان للاستيراد والتصدير"],
      description: "SARHAN Co. — International Trade, Logistics & Flax Commodities",
      inLanguage: ["en", "ar", "fr", "zh"],
    },
    {
      "@type": "Organization",
      "@id": "https://sarhanco.com/#organization",
      name: "SARHAN Import & Export",
      alternateName: ["SARHAN Co.", "sarhanco", "sarhanco.com"],
      url: "https://sarhanco.com",
      logo: "https://sarhanco.com/sarhan-logo.png",
      email: "imex@sarhanco.com",
      telephone: "+201133289251",
      description:
        "Premium international commodity trading, shipping, and logistics. Supplying natural flax fiber, linen products, and agricultural commodities to global textile manufacturers.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales & Inquiries",
        telephone: "+201133289251",
        email: "imex@sarhanco.com",
        availableLanguage: ["English", "Arabic", "French", "Chinese"],
      },
      sameAs: ["https://sarhanco.com"],
    },
  ],
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
          defaultTheme="dark"
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
