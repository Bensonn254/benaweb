import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = "BenaWeb | Web Design & React Development — Nairobi, Kenya",
  description = "BenaWeb — Nairobi-based web studio building fast, mobile-first websites, React web apps, and SEO solutions for Kenyan businesses.",
  url = "https://benaweb.co.ke"
}) {
  const gbpUrl = "https://www.google.com/search?sca_esv=88cd9ac92428eef7&sxsrf=ANbL-n5PH9FvkXu4dQsesIl5wtQ90bNKUQ%3A1775207724309&q=BenaWeb&stick=H4sIAAAAAAAAAONgU1IxqDAyNjdLMjZIS0kyNjFITLEyqEhNMzW3MEw1NDcwMDMySzZfxMrulJqXGJ6aBACk3B5JMgAAAA&mat=CW7fdHdGRE0R&ved=2ahUKEwibj72OrNGTAxUy_rsIHW1qBF4QrMcEegQIJhAC";

  // Google Service Area Business Schema 
  // explicitly hiding streetAddress but specifying Nairobi
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BenaWeb",
    "url": url,
    "telephone": "+254743052401",
    "priceRange": "$$",
    "image": "https://benaweb.co.ke/images/og-banner.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE"
    },
    // Used instead of a strict location if operating remotely:
    "areaServed": [
      {
        "@type": "City",
        "name": "Nairobi"
      },
      {
        "@type": "Country",
        "name": "Kenya"
      }
    ],
    "sameAs": [
      gbpUrl,
      "https://twitter.com/bensonn254"
    ]
  };

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph / Social Metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://benaweb.co.ke/images/og-banner.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://benaweb.co.ke/images/og-banner.png" />
      <link rel="canonical" href={url} />

      {/* Structured Data JSON-LD using dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  )
}
