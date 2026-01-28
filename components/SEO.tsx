import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "La Porte du Bengale",
  description = "Restaurant indien authentique à Épinal. Commandez en ligne vos plats préférés : tandoori, curry, biryani, naan. Livraison rapide à Épinal et alentours.",
  keywords = "restaurant indien épinal, cuisine indienne épinal, tandoori épinal, curry épinal, biryani épinal, livraison indien épinal",
  image = "https://la-porte-du-bengale.netlify.app/og-image.jpg",
  url = "https://la-porte-du-bengale.netlify.app"
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "La Porte du Bengale",
    "image": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9 rue de Nancy",
      "addressLocality": "Épinal",
      "addressRegion": "Grand Est",
      "postalCode": "88000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.1747",
      "longitude": "6.4497"
    },
    "url": url,
    "telephone": "+33329641651",
    "servesCuisine": "Indienne",
    "priceRange": "€€",
    "acceptsReservations": true,
    "menu": `${url}/commander`,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "18:30",
        "closes": "23:30"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="La Porte du Bengale" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
