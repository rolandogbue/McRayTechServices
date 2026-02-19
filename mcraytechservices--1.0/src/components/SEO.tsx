import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  robots,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content={robots} />
  );
}
