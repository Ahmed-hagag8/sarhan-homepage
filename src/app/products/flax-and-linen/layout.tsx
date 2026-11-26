import type { Metadata } from "next";

const BASE_URL = "https://www.sarhanco.com";
const PAGE_URL = `${BASE_URL}/products/flax-and-linen`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Flax & Linen Collection | SARHAN Co.",
  description:
    "Premium natural flax and linen fiber collection by SARHAN Co. (sarhanco.com). Scutched flax, hackled flax, cottonised flax, flax tow, and flax seeds — ready for global shipping with ISO 9001 compliance.",
  keywords: [
    "sarhanco",
    "sarhanco.com",
    "flax fiber",
    "linen",
    "scutched flax",
    "hackled flax",
    "cottonised flax",
    "flax tow",
    "flax seeds",
    "natural fiber",
    "textile export",
    "Egypt flax",
    "ISO 9001",
    "fiber atelier",
    "SARHAN Co",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG", "fr_FR", "zh_CN"],
    url: PAGE_URL,
    siteName: "SARHAN Co.",
    title: "Flax & Linen Collection | SARHAN Co.",
    description:
      "Premium natural flax and linen fiber. Scutched flax, hackled flax, cottonised flax, tow, and seeds — ready for global shipping. ISO 9001 compliant.",
    images: [
      {
        url: "/products/scutched_flax_new.jpg",
        width: 1200,
        height: 630,
        alt: "Scutched Flax — SARHAN Co. Natural Fiber Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flax & Linen Collection | SARHAN Co.",
    description:
      "Premium natural flax and linen fiber for global textile manufacturers. ISO 9001 compliant shipping.",
    images: ["/products/scutched_flax_new.jpg"],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-US": PAGE_URL,
      "ar-EG": PAGE_URL,
      "fr-FR": PAGE_URL,
      "zh-CN": PAGE_URL,
    },
  },
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SARHAN Flax & Linen Collection",
  description:
    "Premium natural flax and linen fiber products for global textile manufacturers.",
  url: PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Scutched Flax",
        description:
          "Long flax fibers mechanically cleaned using special scutching machines to remove impurities and wooden particles.",
        image: `${BASE_URL}/products/scutched_flax_new.jpg`,
        brand: { "@type": "Brand", name: "SARHAN" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "SARHAN Import & Export" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Hackled Flax",
        description:
          "Fine-combed long-line flax fibers with aligned fiber structure, premium grade for high-end textile spinning.",
        image: `${BASE_URL}/products/hackled_flax_new.jpg`,
        brand: { "@type": "Brand", name: "SARHAN" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "SARHAN Import & Export" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Cottonised Flax",
        description:
          "Flax fiber processed to resemble cotton, suitable for blended spinning and cotton-system machinery.",
        image: `${BASE_URL}/products/cottonised_flax_new.jpg`,
        brand: { "@type": "Brand", name: "SARHAN" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "SARHAN Import & Export" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Flax Seeds",
        description:
          "Premium quality flax seeds, oil-rich variety, suitable for food, pharmaceutical, and oil extraction industries.",
        image: `${BASE_URL}/products/flax_seeds.jpg`,
        brand: { "@type": "Brand", name: "SARHAN" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "SARHAN Import & Export" },
        },
      },
    },
  ],
};

export default function FlaxAndLinenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      {children}
    </>
  );
}
