import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  structuredData?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  keywords,
  robots = "index,follow",
  image,
  url,
  type = "website",
  structuredData,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta
        name="twitter:title"
        content="Best Web Design, Marketing, CRM Automation & Custom Software Company in Abuja | McRay Tech Services"
      />
      <meta name="twitter:site" content="@mcraytechservcs" />
      <meta
        name="twitter:description"
        content="Grow your business with one trusted partner. McRay Tech Services helps companies increase revenue and streamline operations. We implement CRM systems, automate marketing and workflows, build high-converting websites, develop custom software, and manage digital growth for businesses in Abuja and across Nigeria. Book a free consultation today!."
      />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
