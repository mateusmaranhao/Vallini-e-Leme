import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export function SEOHead({ 
  title, 
  description, 
  canonicalUrl, 
  ogType = 'website',
  jsonLd 
}: SEOProps) {
  const siteUrl = 'https://DOMINIO-REAL.com.br';
  const fullUrl = `${siteUrl}${canonicalUrl}`;
  // We use a relative path for the OG image that resolves to public/og-image.webp
  const ogImageUrl = `${siteUrl}/og-image.webp`;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
