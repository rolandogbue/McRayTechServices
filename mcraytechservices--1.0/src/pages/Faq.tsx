import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SEO_CONFIG from "@/config/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ScrollAnimations";

const Faq = () => {
  const { title, description, keywords, robots } = SEO_CONFIG.faq;

  const faqs = [
    {
      question: "What does McRay Tech Services do?",
      answer:
        "We are a digital growth partner for small and medium businesses. We handle everything your business grow and operate digitally - website development, branding, digital marketing, AI-powered automation, custom operational software, and IT consulting; under one roof. Most of our clients come to us because they are tired of managing multiple vendors with no one accountable for the full picture. We replace that fragmentation with one modular system, one strategy, and one team invested in your results. ",
    },
    {
      question:
        "How is McRay Tech Services different from a regular digital agency?",
      answer:
        "Most agencies specialize in one thing - a web agency builds your site and hands it off, a digital marketing agency runs your ads and sends you a report. Neither stays accountable for what the other is doing, and neither is measured by your actual business results. We are different in three ways. We handle everything together, not in pieces. We work on a retainer model, which means we stay invested in your results long after launch. And we build modular systems designed to grow with your business - not projects that become obsolete the moment they are delivered.",
    },
    {
      question: "Where is McRay Tech Services based and who do you work with?",
      answer:
        "We are based in Abuja, Federal Capital Territory, and work with small and medium businesses across Nigeria. Our clients span a range of industries - from hospitality and real estate to retail, professional services, and logistics. If your business has outgrown manual processes and is ready to compete digitally, we are likely a fit.",
    },
    {
      question: "How does working with McRay Tech Services actually begin?",
      answer:
        "Every new clients starts with a free 30-minutes Strategy Call. We use that session to understand your business, identify your biggest growth opportunities, and recommend the right starting point. From there we put together a tailored plan - what to prioritise, in what order, and why. If you are proceeding with a custom system build, we begin with a 60-minutes onboarding session to map your operation before any development starts. ",
    },
    {
      question: "Do I have to commit to everything at once?",
      answer:
        "No - and this is by design. Our model is modular, which means you start with what your business actually needs right now and expand as your grow. If the market tightens, your plan can be right-sized without losing the systems you have already built. We do ask for a minimum three-month commitment on retainer plans. This protects you as much as it protects us - meaningful results from marketing, automation, and system deployment take time to compound. A one-month engagement does not give either party enough runway to demonstrate real outcomes.",
    },
    {
      question: "What does a typical engagement look like month to month?",
      answer:
        "It depens on your plan, but broadly: the first month is focused on building - website, system configuration, campaign setup, automation workflows. Month two shifts to optimization - we analyze what is working, refine what is not, and start generating momentum. From month three onwards we are in a consistent rhythm of execution, reporting, and strategic check-ins. Every client recieves a monthly performance report showing what was done, what it produced, and what we are prioritizing next. Nothing happens without you knowing why.",
    },
    {
      question: "Can you work with my existing marketing tools and systems?",
      answer:
        "Absolutely! We integrate with popular CRMs, email platforms, analytics tools, and marketing software you're already using. If you need new tools for better results, we'll recommend and implement them - but we always aim to work with your existing tech stack when possible.",
    },
    {
      question: "How do you handle different industries and business models?",
      answer:
        "Our team includes specialists across various industries - from professional services and healthcare to real estate and hospitality. We customize our strategies based on your specific industry dynamics, target audience, sales cycle, and business model to ensure maximum relevance and effectiveness.",
    },
    {
      question: "How does Pricing work?",
      answer:
        "We operate on two pricing tracks depending on what you need. For SMB growth partnerships - website, marketing, automation, and IT consulting - we offer three monthly retainer plans: Foundation, Accelerator, and Partner. Each is priced based on the scope of services included. For custom operational systems- hotel booking systems, estate management platforms, Patient Management platforms, and similar purpose-built softare - we charge a one-time setup fee based on the system tier you choose, followed by a matched monthly retainer based on the size of your operation. Ad spend and third-party software subscriptions are billed separately and transparently - you always know exactly what you are paying for and why.",
    },
    {
      question: "Does this retainer fee include ad spend?",
      answer:
        "No - and this is intentional. Ad spend is your budget, deployed on your behalf. Bundling it into the retainer woul mean your marketing performance is tied to an arbitrary budget rathen than a strategy. We manage your campaigns and report on every Naira spent, but the ad budget is a separate line item that you control and approve.",
    },
    {
      question: "Can I start on a lower plan and upgrade later?",
      answer:
        "Yes. Our plans are designed for exactly this. A client who starts on Foundation and grows into Accelerator does not lose anything built - the system expands, it does not restart. Upgrades happen when you are ready, not on a schedule we impose.",
    },
    {
      question: "What happens if I need to pause or cancel?",
      answer:
        "We ask for 30 days written notice to pause or cancel a retainer. This gives us time to hand over any assets, documentations, and access cleanly - so you are never left without your own materials regardless of what happens next. Any custom systems built for you remain yours. We do not hold your infrastructure hostage.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "It depends on what you are measuring. Google Business Profile optimization and review management typically produce visible results within 30 days. SEO and content marketing compound over 60 to 90 days. Automation delivers immediate time savings from the week it is deployed. Paid campaigns can generate leads within the first two weeks if the offer and targeting are right. We set specific expectations with every client before we start - what we are targeting, over what timeframe, and how we will know if it is working. We do not make promise we cannot stand behind.",
    },
    {
      question: "Can you guarantee results?",
      answer:
        "No - and any agency that guarantee specific results is either  lying or has a very specific definition of 'results' that does not match yours. What we can guarantee is the quality of work, the consistency of our process, and our accountability to the metrics we agree on together before we start. What we can show you is what we have produced for other clients - and let that speak for itself. Visit our Case Study page to see specific outcomes. ",
    },
    {
      question: "What if I tried an agency before and it didn't work?",
      answer:
        "This is the most common thing we hear. It usually comes down to one of three things: the agency was focused on deliverables rather than outcomes, nothing was connected - the website did not support the marketing, the marketing did not feed into any automation or there was no accountability after delivery. McRay Tech Services is structured to solve all three. We stay accountable to results, we build connected systems rather than isolated pieces, and our retainer model means we are still invested in your business three months after launch. If you have been burned before, we would rather show you than tell you. The Strategy Call is free and comes with no obligation.",
    },
    {
      question: "Do you build custom software for any type of business ?",
      answer:
        "We build operational systems for businesse that have outgrown manual processes - booking engines, management dashboards, payment and service charge platforms, workflow automation, and similar purpose-built tools. We do not build customer apps or generic SaaS products. If you are unsure whether your operational challenge fits what we build, describe it in the Strategy Call and we will tell you honestly whether we are the right fit.",
    },
    {
      question: "Who owns the system after it is built?",
      answer:
        "You do. Every system we build for a client is that client's property. We retain no ownership, no licensing rights over your data, and no ability to take the system away. The monthly retainer after launch covers maintenance, hosting, support, and ongoing development - not a lease on software you already paid to build.",
    },
    {
      question: "What happens to the system if we stop the retainer?",
      answer:
        "The system continues to function. You retain acess and onwership. What we stops is our active maintenance, monitoring, hosting managment, and support. We provide a full handover document so you or another provider can manage the system going forward. We handle this professionally regardless of why the engagement ends.",
    },
    {
      question: "How do I know McRay Tech Services is the right fit for me?",
      answer:
        "We work best with businesses that are ready to invest in growth - not just spend on it. If you are looking for the cheapest option, we are probably not the right fit. If you want a partner who will stay accountable to your results and build something that compounds over time, we likely are. The Strategy Call exist precisely for this. Thirty minutes. No pitch, no pressure. Just an honest conversation about where your business is and whether McRay Tech Services can help move it forward.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a free 30-minutes Strategy Call at mcraytechservices.com/booking. We will take it from there.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        robots={robots}
      />
      <Header />

      {/* FAQ Hero*/}
      <section className="pt-24 pb-16 gradient-bg text-primary-foreground">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Frequently Asked
                <span className="text-accent"> Questions</span>
              </h1>

              <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
                Get answers to common questions about our all-in-one business
                growth solutions.
              </p>
              <p className="mt-4 text-xl md:text-xl opacity-80 leading-relaxed">
                Learn what working with us looks like. Understand our processes
                before you get started.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-6">
          <FadeIn delay={0.2} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg shadow-soft border border-border overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 text-left font-semibold text-foreground hover:text-primary transition-colors hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;
