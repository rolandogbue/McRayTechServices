interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
}

const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title:
      "Website Builder in Abuja | Grow Your Business with Website, Branding, SEO & Digital Marketing, and Automation",
    description:
      "McRay Tech Services is an all-in-one software and digital growth partner helping small and medium businesses with website development, branding, SEO, digital marketing, and automation to drive faster growth. Save time, cut costs, and grow your business faster today.",
    keywords:
      "web developer in abuja, web development, website builder in abuja, SEO services, small business website abuja, digital marketing, marketing agency in abuja, design agency in abuja, lead generation, increase online visibility, how to grow my business, business automation, graphic designer, product design, ui/ux, social media managemnet, e-commerce builder, online-store builder, web designer, tech company in abuja, software development company in abuja, mcray tech services",
  },

  about: {
    title: "About Us | McRay Tech Services",
    description:
      "Discover how McRay Tech Services empowers small businesses with digital solutions that drive growth.",
    keywords:
      "about us, McRay Tech Services, digital solutions, small business growth",
  },

  faq: {
    title: "FAQ | McRay Tech Services",
    description:
      "Find clear answers to questions about our services, delivery timelines, and how we help small businesses grow with tech.",
    keywords: "faq, business faq, digital services faq, web development faq",
  },

  blog: {
    title: "Blog | McRay Tech Services",
    description:
      "Read helpful insights on business growth, tech tools, digital marketing, automation, and website development for small and medium businesses",
    keywords:
      "business growth, digital marketing, automation, website development, small business marketing, SEO, SEO tutorials",
  },

  contact: {
    title: "Contact Us | McRay Tech Services",
    description:
      "Get in touch with McRay Tech Services for website development, digital marketing, SEO, and automation solutions",
  },

  // Add more pages here
};

export default SEO_CONFIG;
