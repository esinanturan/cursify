import { MetadataRoute } from 'next';

export default function schema() {
  const baseUrl = 'https://cursify.ui-layouts.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cursify',
    description:
      'A comprehensive library of stunning cursor animations and interactive effects for React and Next.js applications',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'Cursify',
      description:
        'React cursor animation library with 38+ interactive components',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        '3D Cursor Effects',
        'Neon Glow Animations',
        'Magnetic Interactions',
        'Particle Trails',
        'Canvas Animations',
        'Pattern Effects',
        'WebGL Shaders',
        'Spring Physics',
        'Customizable Colors',
        'Responsive Design',
      ],
      screenshot: `${baseUrl}/screenshot-desktop.png`,
      downloadUrl: `${baseUrl}`,
      author: {
        '@type': 'Organization',
        name: 'Cursify Team',
        url: `${baseUrl}/about`,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cursify',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    sameAs: ['https://github.com/ui-layouts/cursify'],
  };
}
