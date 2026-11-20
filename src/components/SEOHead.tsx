import { useEffect } from 'react';
import { BUSINESS_INFO, BRANCHES } from '../data/businessData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schemaType?: 'HairSalon' | 'LocalBusiness' | 'MedicalBusiness' | 'Article';
  pageJsonLd?: Record<string, unknown>;
}

export function SEOHead({
  title,
  description,
  canonicalPath = '/',
  pageJsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Set document title
    const fullTitle = title
      ? `${title} | ${BUSINESS_INFO.name}`
      : `${BUSINESS_INFO.name} | Non-Surgical Hair Replacement in Kadapa, Proddatur, Madanapalle & Nandyal`;
    document.title = fullTitle;

    // 2. Set Meta Description
    const metaDesc = description ||
      "Luxury non-surgical hair replacement studio in Andhra Pradesh. 1-hour natural hair patch, hair bonding, hair clipping, and ladies extensions in Kadapa (HQ), Proddatur, Madanapalle & Nandyal.";
    
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDesc);

    // 3. Set Canonical Link
    const baseUrl = 'https://golden-hair-wig-studio.pages.dev';
    const canonicalUrl = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 4. Inject Schema.org JSON-LD
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": BUSINESS_INFO.name,
      "alternateName": BUSINESS_INFO.shortName,
      "description": metaDesc,
      "url": canonicalUrl,
      "telephone": BUSINESS_INFO.primaryPhone,
      "priceRange": "₹₹",
      "founder": {
        "@type": "Person",
        "name": BUSINESS_INFO.proprietor
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, Door No: 4-622-1, Railway Station Road, Beside Shirdi Sai Sweets",
        "addressLocality": "Kadapa",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "516001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.4753,
        "longitude": 78.8267
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        }
      ],
      "areaServed": BRANCHES.map(b => b.city),
      "department": BRANCHES.map(b => ({
        "@type": "HairSalon",
        "name": `${BUSINESS_INFO.name} - ${b.name}`,
        "telephone": b.phones[0],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": b.address,
          "addressLocality": b.city,
          "addressRegion": b.state,
          "postalCode": b.pincode,
          "addressCountry": "IN"
        }
      }))
    };

    const schemaToInject = pageJsonLd || defaultSchema;

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaToInject);
  }, [title, description, canonicalPath, pageJsonLd]);

  return null;
}
