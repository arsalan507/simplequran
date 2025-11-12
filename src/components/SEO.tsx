import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'SimpleQuran.in - Understand the Quran Like Never Before',
  description = 'A beautifully illustrated guide that makes Quranic teachings simple, clear, and meaningful for everyone. Download now for just ₹99.',
  image = 'https://simplequran.in/og-image.jpg',
  url = 'https://simplequran.in',
}) => {
  useEffect(() => {
    // Update meta tags dynamically
    document.title = title;

    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:url', url);
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);

    // Add structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'SimpleQuran - Complete Quran E-Book Guide',
      image: image,
      description: description,
      brand: {
        '@type': 'Brand',
        name: 'SimpleQuran.in',
      },
      offers: {
        '@type': 'Offer',
        url: url,
        priceCurrency: 'INR',
        price: '99',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
      },
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [title, description, image, url]);

  return null;
};

export default SEO;
