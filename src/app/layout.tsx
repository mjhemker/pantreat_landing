import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pantreat - Your AI Kitchen Assistant | Save Money, Reduce Food Waste",
  description: "Transform your pantry into personalized recipes with Pantreat's AI. Track inventory, prevent waste, and save up to $1,500 annually. Join the beta today!",
  keywords: ["AI cooking assistant", "recipe generator", "food waste reduction", "pantry management", "meal planning", "smart kitchen"],
  authors: [{ name: "Pantreat Team" }],
  creator: "Pantreat",
  publisher: "Pantreat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pantreat.com',
    title: 'Pantreat - Your AI Kitchen Assistant',
    description: 'Cook smarter, waste less, save more. Turn your pantry into personalized recipes with AI-powered assistance.',
    siteName: 'Pantreat',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pantreat - AI Kitchen Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pantreat - Your AI Kitchen Assistant',
    description: 'Cook smarter, waste less, save more. Join the beta today!',
    images: ['/og-image.png'],
    creator: '@pantreat',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://pantreat.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://pantreat.com/#website",
                  "url": "https://pantreat.com/",
                  "name": "Pantreat",
                  "description": "Your AI Kitchen Assistant",
                  "inLanguage": "en-US",
                },
                {
                  "@type": "Product",
                  "name": "Pantreat",
                  "description": "AI-powered cooking assistant that reduces food waste and grocery spend",
                  "brand": {
                    "@type": "Brand",
                    "name": "Pantreat"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Free during beta"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How does Pantreat track expiration dates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pantreat uses receipt scanning, voice input, and a comprehensive database of average food shelf lives."
                      }
                    },
                    {
                      "@type": "Question", 
                      "name": "Is my data private and secure?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we use industry-standard encryption and never sell your personal data."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
