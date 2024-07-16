import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.yoursite.com'),
  title: {
    default: "My Awesome Blog",
    template: "%s | My Awesome Blog",
  },
  description: "This is a description for my blog.",
  keywords: ['blog', 'web development', 'nextjs'],
  verification: {
    google: 'google-site-verification=your_google_verification_code',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script id="schema-org-markup-website" type="application/ld+json">
          {`
            {
              "@context" : "https://schema.org",
              "@type" : "WebSite",
              "name" : "My Awesome blog",
              "url" : "https://www.yoursite.com/"
            }`}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
