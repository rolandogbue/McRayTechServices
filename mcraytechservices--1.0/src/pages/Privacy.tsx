import React from "react";
import ScrollToTop from "@/components/ScrollToTop";

export default function Privacy() {
  return (
    <>
      <div className="container py-10 md:py-16 min-h-screen bg-background text-foreground">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
          PRIVACY POLICY{" "}
        </h1>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          This Privacy Notice for McRay Tech Services Ltd ("we," "us," or
          "our"), describes how and why we might access, collect, store, use,
          and/or share ("process") your personal information when you use our
          services ("Services"), including when you:{" "}
        </p>

        <ul className="list-disc list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <li>
            Visit our website at{" "}
            <a
              className="text-primary underline"
              href="https://www.mcraytechservices.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.mcraytechservices.com
            </a>{" "}
            or any website of ours that links to this Privacy Notice
          </li>
          <li>
            Engage with us in other related ways, including any marketing or
            events
          </li>
        </ul>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          Questions or concerns? Reading this Privacy Notice will help you
          understand your privacy rights and choices. We are responsible for
          making decisions about how your personal information is processed. If
          you do not agree with our policies and practices, please do not use
          our Services. If you still have any questions or concerns, please
          contact us at{" "}
          <a
            className="text-primary underline"
            href="mailto:support@mcraytechservices.com"
          >
            support@mcraytechservices.com
          </a>
          .
        </p>

        <h3 className="mb-4 text-xl font-semibold">SUMMARY OF KEY POINTS</h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          This summary provides key points from our Privacy Notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our 
          <a className="text-primary underline" href="#tableOfContent">
            table of contents
          </a>
           below to find the section you are looking for.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>What personal information do we process?</strong> When you
          visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use. Learn
          more about 
          <a className="text-primary underline" href="#content1">
            personal information you disclose to us
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Do we process any sensitive personal information?</strong>
           Some of the information may be considered "special" or "sensitive" in
          certain jurisdictions, for example your racial or ethnic origins,
          sexual orientation, and religious beliefs. We may process sensitive
          personal information when necessary with your consent or as otherwise
          permitted by applicable law. Learn more about 
          <a className="text-primary underline" href="#sensitiveInfo">
            sensitive information we process
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Do we collect any information from third parties? </strong>We
          may collect information from public databases, marketing partners,
          social media platforms, and other outside sources. Learn more about 
          <a className="text-primary underline" href="#content2">
            information collected from other sources
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>How do we process your information?</strong> We process your
          information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to comply
          with law. We may also process your information for other purposes with
          your consent. We process your information only when we have a valid
          legal reason to do so. Learn more about 
          <a className="text-primary underline" href="#content2">
            how we process your information
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>
            In what situations and with which types of parties do we share
            personal information?
          </strong>{" "}
          We may share information in specific situations and with specific
          categories of third parties. Learn more about 
          <a className="text-primary underline" href="#thirdParties">
            when and with whom we share your personal information
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>How do we keep your information safe?</strong> We have
          adequate organizational and technical processes and procedures in
          place to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information. Learn more about 
          <a className="text-primary underline" href="#content8">
            how we keep your information safe
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>What are your rights?</strong> Depending on where you are
          located geographically, the applicable privacy law may mean you have
          certain rights regarding your personal information. Learn more about 
          <a className="text-primary underline" href="#content10">
            your privacy rights
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>How do you exercise your rights?</strong> The easiest way to
          exercise your rights is by submitting a 
          <a
            className="text-primary underline"
            href="http://www.mcraytechservices.com/contact"
          >
            data subject access request
          </a>
          , or by{" "}
          <a
            className="text-primary underline"
            href="mailto:support@mcraytechservices.com"
          >
            contacting us
          </a>
          . We will consider and act upon any request in accordance with
          applicable data protection laws.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>
            Want to learn more about what we do with any information we collect?
          </strong>
           
          <a className="text-primary underline" href="#content1">
            Review the Privacy Notice in full
          </a>
          .
        </p>

        <h3 id="tableOfContent" className="mb-4 text-xl font-semibold">
          TABLE OF CONTENTS
        </h3>
        <ol className="list-decimal list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <a className="text-primary underline" href="#content1">
            <li>WHAT INFORMATION DO WE COLLECT?</li>
          </a>
          <a className="text-primary underline" href="#content2">
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          </a>
          <a className="text-primary underline" href="#content3">
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
          </a>
          <a className="text-primary underline" href="#content4">
            <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
          </a>
          <a className="text-primary underline" href="#content5">
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          </a>
          <a className="text-primary underline" href="#content6">
            <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
          </a>
          <a className="text-primary underline" href="#content7">
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          </a>
          <a className="text-primary underline" href="#content8">
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          </a>
          <a className="text-primary underline" href="#content9">
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
          </a>
          <a className="text-primary underline" href="#content10">
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          </a>
          <a className="text-primary underline" href="#content11">
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          </a>
          <a className="text-primary underline" href="#content12">
            <li>DO WE MAKE UPDATES TO THIS PRIVACY NOTICE?</li>
          </a>
          <a className="text-primary underline" href="#content13">
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          </a>
          <a className="text-primary underline" href="#content14">
            <li>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </li>
          </a>
        </ol>

        <h3 id="content1" className=" mb-4 text-xl font-semibold">
          1. WHAT INFORMATION DO WE COLLECT?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Personal information you disclose to us</strong>
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We collect personal information that you
          provide to us.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and Services, when you participate in activities on the
          Services, or otherwise when you contact us.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Personal Information Provided by You.</strong> The personal
          information that we collect depends on the context of your
          interactions with us and the Services, the choices you make, and the
          products and features you use. The personal information we collect may
          include the following:
        </p>
        <ul className="list-disc list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
          <li>Debit/credit card numbers</li>
          <li>Contact preferences</li>
          <li>Business address</li>
          <li>Billing addresses</li>
        </ul>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Sensitive Information.</strong> When necessary, with your
          consent or as otherwise permitted by applicable law, we process the
          following categories of sensitive information:
          <br />
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Information automatically collected</strong>
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> Some information — such as your Internet
          Protocol (IP) address and/or browser and device characteristics — is
          collected automatically when you visit our Services.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </p>
        <p
          id="sensitiveInfo"
          className="mb-4 text-md text-muted-foreground leading-relaxed"
        >
          The information we collect includes:
        </p>
        <ul className="list-disc list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <li>
            <strong>Log and Usage Data.</strong> Log and usage data is
            service-related, diagnostic, usage, and performance information our
            servers automatically collect when you access or use our Services
            and which we record in log files. Depending on how you interact with
            us, this log data may include your IP address, device information,
            browser type, and settings and information about your activity in
            the Services (such as the date/time stamps associated with your
            usage, pages and files viewed, searches, and other actions you take
            such as which features you use), device event information (such as
            system activity, error reports (sometimes called "crash dumps"), and
            hardware settings).
          </li>
          <li>
            <strong>Device Data.</strong> We collect device data such as
            information about your computer, phone, tablet, or other device you
            use to access the Services. Depending on the device used, this
            device data may include information such as your IP address (or
            proxy server), device and application identification numbers,
            location, browser type, hardware model, Internet service provider
            and/or mobile carrier, operating system, and system configuration
            information.
          </li>
          <li>
            <strong>Location Data.</strong> We collect location data such as
            information about your device's location, which can be either
            precise or imprecise. How much information we collect depends on the
            type and settings of the device you use to access the Services. For
            example, we may use GPS and other technologies to collect
            geolocation data that tells us your current location (based on your
            IP address). You can opt out of allowing us to collect this
            information either by refusing access to the information or by
            disabling your Location setting on your device. However, if you
            choose to opt out, you may not be able to use certain aspects of the
            Services.
          </li>
        </ul>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Google API</strong>
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          Our use of information received from Google APIs will adhere to 
          <a
            className="text-primary underline"
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the 
          <a
            className="text-primary underline"
            href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            Limited Use requirements.
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Information collected from other sources</strong>
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We may collect limited data from public
          databases, marketing partners, and other outside sources.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          In order to enhance our ability to provide relevant marketing, offers,
          and services to you and update our records, we may obtain information
          about you from other sources, such as public databases, joint
          marketing partners, affiliate programs, data providers, and from other
          third parties. This information includes mailing addresses, job
          titles, email addresses, phone numbers, intent data (or user behavior
          data), Internet Protocol (IP) addresses, social media profiles, social
          media URLs, and custom profiles, for purposes of targeted advertising
          and event promotion.
        </p>

        <h3 id="content2" className="mb-4 text-xl font-semibold">
          2. HOW DO WE PROCESS YOUR INFORMATION?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We process your information to provide,
          improve, and administer our Services, communicate with you, for
          security and fraud prevention, and to comply with law. We may also
          process your information for other purposes with your consent.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </p>

        <ul className="list-disc list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <li>
            <strong>
              To deliver and facilitate delivery of services to the user.
            </strong>
             We may process your information to provide you with the requested
            service.
          </li>
          <li>
            <strong>
              To respond to user inquiries/offer support to users.
            </strong>
             We may process your information to respond to your inquiries and
            solve any potential issues you might have with the requested
            service.
          </li>
          <li>
            <strong>To send administrative information to you.</strong> We may
            process your information to send you details about our products and
            services, changes to our terms and policies, and other similar
            information.
          </li>
          <li>
            <strong>To fulfill and manage your orders.</strong> We may process
            your information to fulfill and manage your orders, payments,
            returns, and exchanges made through the Services.
          </li>
          <li>
            <strong>To enable user-to-user communications.</strong> We may
            process your information if you choose to use any of our offerings
            that allow for communication with another user.
          </li>
          <li>
            <strong>To request feedback.</strong> We may process your
            information when necessary to request feedback and to contact you
            about your use of our Services.
          </li>
          <li>
            <strong>
              To send you marketing and promotional communications.
            </strong>
             We may process the personal information you send to us for our
            marketing purposes, if this is in accordance with your marketing
            preferences. You can opt out of our marketing emails at any time.
            For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.
          </li>
          <li>
            <strong>To deliver targeted advertising to you.</strong> We may
            process your information to develop and display personalized content
            and advertising tailored to your interests, location, and more.
          </li>
          <li>
            <strong>To post testimonials.</strong> We post testimonials on our
            Services that may contain personal information.
          </li>
          <li>
            <strong>To protect our Services.</strong> We may process your
            information as part of our efforts to keep our Services safe and
            secure, including fraud monitoring and prevention.
          </li>
          <li>
            <strong>
              To evaluate and improve our Services, products, marketing, and
              your experience.
            </strong>{" "}
            We may process your information when we believe it is necessary to
            identify usage trends, determine the effectiveness of our
            promotional campaigns, and to evaluate and improve our Services,
            products, marketing, and your experience.
          </li>
          <li>
            <strong>To identify usage trends.</strong> We may process
            information about how you use our Services to better understand how
            they are being used so we can improve them.
          </li>
          <li>
            <strong>
              To determine the effectiveness of our marketing and promotional
              campaigns.
            </strong>{" "}
            We may process your information to better understand how to provide
            marketing and promotional campaigns that are most relevant to you.
          </li>
          <li>
            <strong>To comply with our legal obligations.</strong> We may
            process your information to comply with our legal obligations,
            respond to legal requests, and exercise, establish, or defend our
            legal rights.
          </li>
        </ul>

        <h3 id="content3" className="mb-4 text-xl font-semibold">
          3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We may share information in specific
          situations described in this section and/or with the following
          categories of third parties.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>
            Vendors, Consultants, and Other Third-Party Service Providers.
          </strong>{" "}
          We may share your data with third-party vendors, service providers,
          contractors, or agents ("third parties") who perform services for us
          or on our behalf and require access to such information to do that
          work. We have contracts in place with our third parties, which are
          designed to help safeguard your personal information. This means that
          they cannot do anything with your personal information unless we have
          instructed them to do it. They will also not share your personal
          information with any organization apart from us. They also commit to
          protect the data they hold on our behalf and to retain it for the
          period we instruct.
        </p>

        <p
          id="thirdParties"
          className="mb-4 text-md text-muted-foreground leading-relaxed"
        >
          The categories of third parties we may share personal information with
          are as follows:
        </p>
        <ul className="list-disc list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <li>Ad Networks</li>
          <li>Data Analytics Services</li>
          <li>Affiliate Marketing Programs</li>
          <li>Finance & Accounting Tools</li>
          <li>Payment Processors</li>
          <li>Performance Monitoring Tools</li>
          <li>Retargeting Platforms</li>
          <li>Sales & Marketing Tools</li>
          <li>Social Networks</li>
          <li>Website Hosting Service Providers</li>
          <li>AI Platforms</li>
          <li>Communication & Collaboration Tools</li>
          <li>Data Storage Service Providers</li>
          <li>Government Entities</li>
          <li>User Account Registration & Authentication Services</li>
        </ul>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We also may need to share your personal information in the following
          situations:
        </p>
        <ul className="list-disc list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <li>
            <strong>Business Transfers.</strong> We may share or transfer your
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </li>
          <li>
            <strong>When we use Google Maps Platform APIs.</strong> We may share
            your information with certain Google Maps Platform APIs (e.g.,
            Google Maps API, Places API). We use certain Google Maps Platform
            APIs to retrieve certain information when you make location-specific
            requests. This includes: Business address; and other similar
            information. A full list of what we use information for can be found
            in this section and in the previous section titled "HOW DO WE
            PROCESS YOUR INFORMATION?" Google Maps uses GPS, Wi-Fi, and cell
            towers to estimate your location. GPS is accurate to about 20
            meters, while Wi-Fi and cell towers help improve accuracy when GPS
            signals are weak, like indoors. This data helps Google Maps provide
            directions, but it is not always perfectly precise. We obtain and
            store on your device ("cache") your location. You may revoke your
            consent anytime by contacting us at the contact details provided at
            the end of this document. The Google Maps Platform APIs that we use
            store and access cookies and other information on your devices. If
            you are a user currently in the European Economic Area (EU
            countries, Iceland, Liechtenstein, and Norway) or the United
            Kingdom, please take a look at our Cookie Notice.
          </li>
          <li>
            <strong>Affiliates.</strong> We may share your information with our
            affiliates, in which case we will require those affiliates to honor
            this Privacy Notice. Affiliates include our parent company and any
            subsidiaries, joint venture partners, or other companies that we
            control or that are under common control with us.
          </li>
          <li>
            <strong>Business Partners.</strong> We may share your information
            with our business partners to offer you certain products, services,
            or promotions.
          </li>
        </ul>

        <h3 id="content4" className="mb-4 text-xl font-semibold">
          4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We are not responsible for the safety of
          any information that you share with third parties that we may link to
          or who advertise on our Services, but are not affiliated with, our
          Services.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          The Services may link to third-party websites, online services, or
          mobile applications and/or contain advertisements from third parties
          that are not affiliated with us and which may link to other websites,
          services, or applications. Accordingly, we do not make any guarantee
          regarding any such third parties, and we will not be liable for any
          loss or damage caused by the use of such third-party websites,
          services, or applications. The inclusion of a link towards a
          third-party website, service, or application does not imply an
          endorsement by us. We cannot guarantee the safety and privacy of data
          you provide to any third-party websites. Any data collected by third
          parties is not covered by this Privacy Notice. We are not responsible
          for the content or privacy and security practices and policies of any
          third parties, including other websites, services, or applications
          that may be linked to or from the Services. You should review the
          policies of such third parties and contact them directly to respond to
          your questions.
        </p>

        <h3 id="content5" className="mb-4 text-xl font-semibold">
          5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We may use cookies and other tracking
          technologies to collect and store your information.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to gather information when you interact with our Services.
          Some online tracking technologies help us maintain the security of our
          Services, prevent crashes, fix bugs, save your preferences, and assist
          with basic site functions.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We also permit third parties and service providers to use online
          tracking technologies on our Services for analytics and advertising,
          including to help manage and display advertisements, to tailor
          advertisements to your interests, or to send abandoned shopping cart
          reminders (depending on your communication preferences). The third
          parties and service providers use their technology to provide
          advertising about products and services tailored to your interests
          which may appear either on our Services or on other websites.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          Specific information about how we use such technologies and how you
          can refuse certain cookies is set out in our Cookie Notice.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Google Analytics</strong>
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We may share your information with Google Analytics to track and
          analyze the use of the Services. The Google Analytics Advertising
          Features that we may use include: Google Analytics Demographics and
          Interests Reporting, Remarketing with Google Analytics and Google
          Display Network Impressions Reporting. To opt out of being tracked by
          Google Analytics across the Services, visit
          https://tools.google.com/dlpage/gaoptout. You can opt out of Google
          Analytics Advertising Features through Ads Settings and Ad Settings
          for mobile apps. Other opt out means include
          http://optout.networkadvertising.org/ and
          http://www.networkadvertising.org/mobile-choice. For more information
          on the privacy practices of Google, please visit the Google Privacy &
          Terms page.
        </p>

        <h3 id="content6" className="mb-4 text-xl font-semibold">
          6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We offer products, features, or tools
          powered by artificial intelligence, machine learning, or similar
          technologies.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          As part of our Services, we offer products, features, or tools powered
          by artificial intelligence, machine learning, or similar technologies
          (collectively, "AI Products"). These tools are designed to enhance
          your experience and provide you with innovative solutions. The terms
          in this Privacy Notice govern your use of the AI Products within our
          Services.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Use of AI Technologies</strong>
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We provide the AI Products through third-party service providers ("AI
          Service Providers"), including Hubspot, GoHighLevel and Zapier. As
          outlined in this Privacy Notice, your input, output, and personal
          information will be shared with and processed by these AI Service
          Providers to enable your use of our AI Products for purposes outlined
          in "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" You
          must not use the AI Products in any way that violates the terms or
          policies of any AI Service Provider.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Our AI Products</strong>
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          Our AI Products are designed for the following functions:
        </p>
        <ul className="list-disc list-inside mb-6 text-md text-muted-foreground leading-relaxed">
          <li>AI automation</li>
          <li>AI-driven marketing campaigns</li>
          <li>Customer relationship management (CRM) enhancements</li>
          <li>Data analysis and reporting</li>
          <li>Workflow optimization</li>
          <li>Personalized content generation</li>
          <li>Lead generation and scoring</li>
          <li>Chatbots and virtual assistants</li>
          <li>Predictive analytics</li>
          <li>Sales funnel management</li>
        </ul>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>How We Process Your Data Using AI</strong>
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          All personal information processed using our AI Products is handled in
          line with our Privacy Notice and our agreement with third parties.
          This ensures high security and safeguards your personal information
          throughout the process, giving you peace of mind about your data's
          safety.
        </p>

        <h3 id="content7" className="mb-4 text-xl font-semibold">
          7. HOW LONG DO WE KEEP YOUR INFORMATION?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We keep your information for as long as
          necessary to fulfill the purposes outlined in this Privacy Notice
          unless otherwise required by law.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements).
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>

        <h3 id="content8" className="mb-4 text-xl font-semibold">
          8. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We aim to protect your personal information
          through a system of organizational and technical security measures.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </p>

        <h3 id="content9" className="mb-4 text-xl font-semibold">
          9. DO WE COLLECT INFORMATION FROM MINORS?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> We do not knowingly collect data from or
          market to children under 18 years of age.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We do not knowingly collect, solicit data from, or market to children
          under 18 years of age, nor do we knowingly sell such personal
          information. By using the Services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent’s use of the Services. If we learn
          that personal information from users less than 18 years of age has
          been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at{" "}
          <a
            className="text-primary underline"
            href="mailto:support@mcraytechservices.com"
          >
            support@mcraytechservices.com
          </a>
          .
        </p>

        <h3 id="content10" className="mb-4 text-xl font-semibold">
          10. WHAT ARE YOUR PRIVACY RIGHTS?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong>  You may review, change, or terminate your
          account at any time, depending on your country, province, or state of
          residence.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Withdrawing your consent:</strong> If we are relying on your
          consent to process your personal information, which may be express
          and/or implied consent depending on the applicable law, you have the
          right to withdraw your consent at any time. You can withdraw your
          consent at any time by contacting us by using the contact details
          provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
          below.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>
            Opting out of marketing and promotional communications:
          </strong>
           You can unsubscribe from our marketing and promotional communications
          at any time by clicking on the unsubscribe link in the emails that we
          send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we
          send, or by contacting us using the details provided in the section
          "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be
          removed from the marketing lists. However, we may still communicate
          with you — for example, to send you service-related messages that are
          necessary for the administration and use of your account, to respond
          to service requests, or for other non-marketing purposes.
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>Cookies and similar technologies:</strong> Most Web browsers
          are set to accept cookies by default. If you prefer, you can usually
          choose to set your browser to remove cookies and to reject cookies. If
          you choose to remove cookies or reject cookies, this could affect
          certain features or services of our Services. You may also opt out of
          interest-based advertising by advertisers on our Services.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          If you have questions or comments about your privacy rights, you may
          email us at{" "}
          <a
            className="text-primary underline"
            href="mailto:support@mcraytechservices.com"
          >
            support@mcraytechservices.com
          </a>
          .
        </p>

        <h3 id="content11" className="mb-4 text-xl font-semibold">
          11. CONTROLS FOR DO-NOT-TRACK FEATURES
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage, no
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this Privacy
          Notice.
        </p>

        <h3 id="content12" className="mb-4 text-xl font-semibold">
          12. DO WE MAKE UPDATES TO THIS NOTICE?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          <strong>In Short:</strong> Yes, we will update this notice as
          necessary to stay compliant with relevant laws.
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated "Revised" date at the top of
          this Privacy Notice. If we make material changes to this Privacy
          Notice, we may notify you either by prominently posting a notice of
          such changes or by directly sending you a notification. We encourage
          you to review this Privacy Notice frequently to be informed of how we
          are protecting your information.
        </p>

        <h3 id="content13" className="mb-4 text-xl font-semibold">
          13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          If you have questions or comments about this notice, you may email us
          at{" "}
          <a
            className="text-primary underline"
            href="mailto:support@mcraytechservices.com"
          >
            support@mcraytechservices.com
          </a>
          .
        </p>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          or contact us by post at:
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          McRay Tech Services Ltd
          <br />
          BLK C40 NAHS KURUDU II, . Und St. Gidan Mangoro
          <br />
          Abuja, FCT 900109
          <br />
          <br />
          Nigeria
        </p>

        <h3 id="content14" className="mb-4 text-xl font-semibold">
          14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </h3>
        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          details about how we have processed it, correct inaccuracies, or
          delete your personal information. You may also have the right to
          withdraw your consent to our processing of your personal information.
          These rights may be limited in some circumstances by applicable law.
          To request to review, update, or delete your personal information,
          please fill out and submit a 
          <a
            className="text-primary underline"
            href="https://www.mcraytechservices.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            data subject access request
          </a>
          .
        </p>

        <p className="mb-4 text-md text-muted-foreground leading-relaxed">
          We will respond to your request within 30 days. If you are a resident
          of the European Economic Area (EEA) or United Kingdom (UK), and you
          wish to make a complaint about our use of your personal information,
          you have the right to lodge a complaint with your local data
          protection authority.
        </p>
      </div>
      <ScrollToTop />
    </>
  );
}
