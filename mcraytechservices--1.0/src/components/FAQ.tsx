import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
	const faqs = [
		{
			question:
				"How is this different from hiring separate agencies for each service?",
			answer:
				"Unlike managing multiple vendors, our all-in-one approach ensures every element of your growth strategy works together seamlessly. This eliminates communication gaps, reduces costs by up to 60%, and delivers faster results because everything is coordinated from day one.",
		},
		{
			question: "What if I already have a website? Do I need a new one?",
			answer:
				"Not necessarily! We'll first audit your existing website's performance, user experience, and conversion potential. If it's serving your business well, we'll optimize and enhance it. If it's holding back your growth, we'll recommend improvements or a complete rebuild - but only when it truly benefits your ROI.",
		},
		{
			question: "How quickly can I expect to see results?",
			answer:
				"You'll typically see initial improvements within 30-60 days, with significant growth momentum building over 3-6 months. Branding and website updates show immediate impact, while SEO and long-term marketing strategies compound over time. We provide weekly reports so you can track progress every step of the way.",
		},
		{
			question: "What size businesses do you work with?",
			answer:
				"We specialize in small to medium-sized businesses (SMBs) who are 'seriously' ready to scale. Whether you're a local service business, e-commerce company, or B2B provider, our strategies adapt to your industry and growth stage.",
		},
		{
			question: "How much does this cost compared to hiring multiple vendors?",
			answer:
				"Most businesses save 40-60% compared to hiring separate agencies for branding, web development, SEO, marketing, and social media management. Instead of paying $8,000-15,000/month to multiple vendors, our comprehensive packages start at $3,500/month - with better coordination and results.",
		},
		{
			question: "What kind of reporting and communication can I expect?",
			answer:
				"You'll receive detailed weekly performance updates and comprehensive monthly growth reports. We provide a dedicated account manager as your single point of contact, plus access to a client portal where you can track all metrics, campaigns, and progress in real-time.",
		},
		{
			question: "Can you work with my existing marketing tools and systems?",
			answer:
				"Absolutely! We integrate with popular CRMs, email platforms, analytics tools, and marketing software you're already using. If you need new tools for better results, we'll recommend and implement them - but we always aim to work with your existing tech stack when possible.",
		},
		{
			question:
				"What if I want to focus on just one or two services initially?",
			answer:
				"While our all-in-one approach delivers the best results, we can start with your highest-priority areas and expand from there. Many clients begin with branding and website optimization, then add marketing and automation as they see results. We'll create a phased approach that fits your budget and timeline.",
		},
		{
			question: "How do you handle different industries and business models?",
			answer:
				"Our team includes specialists across various industries - from professional services and healthcare to e-commerce and manufacturing. We customize our strategies based on your specific industry dynamics, target audience, sales cycle, and business model to ensure maximum relevance and effectiveness.",
		},
		{
			question: "What's included in the business automation service?",
			answer:
				"We streamline your operations with CRM setup, email marketing automation, lead nurturing sequences, appointment scheduling, customer onboarding workflows, and integration between your marketing and sales systems. This typically saves 15-20 hours per week of manual work while improving lead conversion rates.",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-white to-gray-50">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
						FAQ
					</Badge>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
						Frequently Asked
						<span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
							{" "}
							Questions
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Get answers to common questions about our all-in-one business growth
						solutions.
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="space-y-4">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
							>
								<AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:text-orange-600 transition-colors hover:no-underline">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
