interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
}

const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title:
      "Best Web design and Marketing agency in abuja | Grow your business with Website, Branding, Marketing, and Automation",
    description:
      "McRay Tech Services is an all-in-one business growth partner helping small and medium businesses with website development, branding, marketing, and automation to drive faster growth, Save time, and cut costs. Grow your business with us today!",
    keywords:
      "web developer in abuja, web development company near me, website builder in abuja, design agency in abuja, design expert in abuja, branding expert in abuja, e-commerce builder, online-store builder, web design agency in abuja, web designer near me, marketing company in abuja, marketing agency near me, marketing firm near me, digital marketer in abuja, design agency in abuja, how to grow my business, how to grow my business online, how to increase lead, how to generate lead, lead generation expert, google ads manager, how to increase online visibility, marketing agency in abuja, best maketing agency in abuja, Gohighlevel expert, how to automate task, how to automate follow-up, social media manager, CRM expert, business automation specialist, Automation expert, how to increase online booking, how to increase sales, tech company in abuja, software development company in abuja, best software development company in nigeria, best software development companies in abuja, technical partner in abuja",
    robots: "index,follow",
  },

  about: {
    title: "About Us | McRay Tech Services",
    description:
      "Discover how McRay Tech Services empowers small businesses with digital solutions that drive growth. Learn about our mission, values, and the team dedicated to your success.",
    keywords:
      "about us, learn about mcRay Tech Services, digital solutions, small business growth, tech company in abuja, software development company in abuja, web design agency, digital marketing company, marketing agency in abuja, integrated digital solutions, small and medium businesses",
    robots: "index,follow",
  },

  faq: {
    title: "Frequently Asked Questions | McRay Tech Services",
    description:
      "Find clear answers to questions about our services, delivery timelines, and how we help small businesses grow with tech.",
    keywords: "faq, business faq, digital services faq, web development faq",
    robots: "index,follow",
  },

  blog: {
    title: "Blog | McRay Tech Services",
    description:
      "Read helpful insights on business growth, tech tools, digital marketing, automation, and website development for small and medium businesses",
    keywords:
      "business growth, digital marketing, automation, website development, small business marketing, SEO, SEO tutorials",
    robots: "index,follow",
  },

  contact: {
    title: "Contact Us | McRay Tech Services",
    description:
      "Get in touch with McRay Tech Services for website development, marketing, and automation solutions. Start with a free strategy session or send us a message",
    keywords:
      "contact us, book free strategy session, book free consultation, get in touch, visit us, web developer, SEO services, marketing agency abuja, marketing companies, website development company, website development agency abuja, digital marketing specialist, how to grow my business, tech company in abuja, software development company in abuja, web design agency, digital marketing company, marketing agency in abuja, integrated digital solutions, small and medium businesses",
    robots: "index,follow",
  },

  notFound: {
    title: "Page not found",
    description: "an error occurred while trying to find the requested page.",
    robots: "noindex,nofollow",
  },

  // Add more pages here
};

export default SEO_CONFIG;
