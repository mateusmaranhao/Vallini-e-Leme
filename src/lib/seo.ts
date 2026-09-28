const SITE_URL = 'https://vallinielemeadvocacia.com.br';

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Vallini & Leme Advocacia",
  "image": `${SITE_URL}/og-image.webp`,
  "@id": SITE_URL,
  "url": SITE_URL,
  "telephone": "+5519953243159",
  "email": "contato@vallinielemeadvocacia.com.br",
  "priceRange": "$$$$",
  "description": "Escritório de Advocacia em Campinas/SP. Advogadas especialistas em Ações do INSS, Consulta Aposentadoria, Planejamento Previdenciário, Auxílios por Incapacidade e Consultoria para Pessoas Jurídicas.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Barão de Jaguara, 707 - Centro",
    "addressLocality": "Campinas",
    "addressRegion": "SP",
    "postalCode": "13015-926",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-22.9056",
    "longitude": "-47.0608"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/vallinielemeadvocacia"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Campinas"
    },
    {
      "@type": "City",
      "name": "Paulínia"
    },
    {
      "@type": "City",
      "name": "Sumaré"
    },
    {
      "@type": "City",
      "name": "Hortolândia"
    },
    {
      "@type": "City",
      "name": "Americana"
    },
    {
      "@type": "City",
      "name": "Valinhos"
    },
    {
      "@type": "City",
      "name": "Vinhedo"
    },
    {
      "@type": "City",
      "name": "Indaiatuba"
    },
    {
      "@type": "State",
      "name": "São Paulo"
    }
  ]
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vallini & Leme Advocacia",
  "url": SITE_URL
};

export const generateBreadcrumbSchema = (items: { name: string, item: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      ...items.map((breadcrumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": breadcrumb.name,
        "item": `${SITE_URL}${breadcrumb.item}`
      }))
    ]
  };
};

export const generateServiceSchema = (name: string, description: string, urlPath: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Direito Previdenciário e Ações INSS",
    "provider": {
      "@id": SITE_URL,
      "@type": "LegalService",
      "name": "Vallini & Leme Advocacia"
    },
    "name": name,
    "description": description,
    "url": `${SITE_URL}${urlPath}`
  };
};

export const generateFAQSchema = (faqs: { question: string, answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
