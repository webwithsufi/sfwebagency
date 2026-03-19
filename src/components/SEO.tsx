import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
}: SEOProps) => {
  const siteTitle = "SF Growth Agency";
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = "https://sf-growth-agency.com"; // Placeholder, should be dynamic if possible

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
    </Helmet>
  );
};
