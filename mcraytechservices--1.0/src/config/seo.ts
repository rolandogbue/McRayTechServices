interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
}

const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title:
      "Best Web Design, Marketing, CRM Automation & Custom Software Company in Abuja | Business Growth Partner Nigeria | McRay Tech Services",
    description:
      "Grow your business with one trusted partner. McRay Tech Services helps companies increase revenue and streamline operations. We implement CRM systems, automate marketing and workflows, build high-converting websites, develop custom software, and manage digital growth for businesses in Abuja and across Nigeria. Book a free consultation today!",
    keywords:
      "CRM implementation expert, crm specialist abuja, crm automation abuja, business automation services Nigeria, website builder abuja, automation company abuja, HubSpot CRM setup abuja, HighLevel CRM expert abuja, digital transformation service company, business process automation abuja, software development company Abuja, business automation consultant nigeria, crm consultant nigeria, crm implementation agency abuja, zoho crm implementation nigeria, gohighlevel setup abuja, software company Abuja, marketing agency abuja, CRM consulting firm Nigeria, CRM implementation consultant Abuja, business automation consultant Nigeria, Zoho partner Nigeria, business automation specialist abuja",
    robots: "index,follow",
  },

  about: {
    title:
      "About McRay Tech Services | Your All-in-One Business Growth Partner & Consultants",
    description:
      "We help Nigerian small and medium businesses scale faster by providing CRM systems, automation, websites, branding, marketing systems, and custom software from one trusted partner. Based in Abuja, our all-in-one approach removes the need to manage multiple vendors while improving revenue, operations, and customer management. Learn more about our mission, values and how we can help your business thrive.",
    keywords:
      "software company Abuja Nigeria, mcray tech services, crm consulting firm nigeria, crm consultants nigeria, business automation consultants nigeria, technology consulting firm abuja, software development company abuja nigeria, digital transformation company nigeria, custom software developers abuja, crm automation specialists nigeria, website development company abuja, marketing automation consultants nigeria",
    robots: "index,follow",
  },

  faq: {
    title: "FAQ | Business Growth & Automation Services Nigeria",
    description:
      "Find clear answers to questions about our services, delivery timelines, and how we help small businesses grow with tech. Find out how we help you grow without vendor hassle.",
    keywords:
      "FAQ business growth Nigeria, CRM questions Nigeria, automation services FAQ, custom software cost Nigeria, Zoho implementation FAQ, SMB digital solutions questions",
    robots: "index,follow",
  },

  blog: {
    title: "Business Growth Blog | Tips for SMBs in Nigeria",
    description:
      "Read practical insights on business growth, tech tools, marketing, CRM, automation, branding, custom software, website development and growth strategies for Nigeria small and medium businesses. Stay ahead with actionable insights from our experts.",
    keywords:
      "crm for small business nigeria, marketing automation guide, business automation tools, digital marketing strategies for small business nigeria, website development tips nigeria, crm setup guide, lead generation strategies nigeria",
    robots: "index,follow",
  },

  contact: {
    title: "Contact Us | Get SMB Growth Help in Nigeria Today",
    description:
      "Ready to scale? Contact McRay Tech Services- your all-in-one partner for CRM, automation, websites, branding, marketing and custom software solutuons. Free consultation for Nigerian businesses. Start with a free strategy session or send us a message",
    keywords:
      "mcray tech services contact, crm consultants abuja, software development company abuja nigeria, website developer abuja nigeria, business automation consultants nigeria, crm implementation consultants nigeria, marketing automation consultants nigeria, custom software Nigeria contact, Zoho expert consultation, business consultant in abuja, marketing consultant near me",
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
