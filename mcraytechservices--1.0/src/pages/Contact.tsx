import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { toast } from "sonner";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		phone: "",
		service: "",
		message: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		toast.success(
			"Thank you for your message! We'll get back to you within 24 hours."
		);
		setFormData({
			name: "",
			email: "",
			company: "",
			phone: "",
			service: "",
			message: "",
		});
	};

	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
							Let's Grow Your
							<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
								{" "}
								Business Together
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
							Ready to scale your business? Get in touch and let's discuss how
							we can help you achieve your growth goals.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<Card className="shadow-xl">
							<CardHeader>
								<CardTitle className="text-2xl text-center">
									Send Us a Message
								</CardTitle>
								<p className="text-gray-600 text-center">
									We'll respond within 24 hours
								</p>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="name">Full Name *</Label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												placeholder="Your full name"
												required
											/>
										</div>
										<div>
											<Label htmlFor="email">Email Address *</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleInputChange}
												placeholder="your.email@company.com"
												required
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="company">Company Name</Label>
											<Input
												id="company"
												name="company"
												value={formData.company}
												onChange={handleInputChange}
												placeholder="Your company name"
											/>
										</div>
										<div>
											<Label htmlFor="phone">Phone Number</Label>
											<Input
												id="phone"
												name="phone"
												type="tel"
												value={formData.phone}
												onChange={handleInputChange}
												placeholder="+1 (555) 123-4567"
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="service">Service Interest</Label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleInputChange}
											className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
										>
											<option value="">Select a service</option>
											<option value="complete-package">
												Complete Growth Package
											</option>
											<option value="branding">Branding & Design</option>
											<option value="website">Website Development</option>
											<option value="seo">SEO & Digital Marketing</option>
											<option value="automation">Business Automation</option>
											<option value="social-media">
												Social Media Management
											</option>
											<option value="consultation">Free Consultation</option>
										</select>
									</div>

									<div>
										<Label htmlFor="message">Message *</Label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											placeholder="Tell us about your business goals and how we can help..."
											rows={5}
											required
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-3"
									>
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
								<p className="text-gray-600 text-lg leading-relaxed mb-8">
									Ready to transform your business? We're here to help you scale
									with our comprehensive growth solutions. Let's discuss your
									goals and create a custom strategy for your success.
								</p>
							</div>

							<div className="grid gap-6">
								<Card className="p-6 hover:shadow-lg transition-shadow">
									<div className="flex items-start space-x-4">
										<div className="bg-blue-100 p-3 rounded-full">
											<Mail className="w-6 h-6 text-blue-600" />
										</div>
										<div>
											<h3 className="font-semibold text-lg">Email Us</h3>
											<p className="text-gray-600">
												solutions@mcraytechservices.com
											</p>
											<p className="text-gray-600">
												support@mcraytechservices.com
											</p>
										</div>
									</div>
								</Card>

								<Card className="p-6 hover:shadow-lg transition-shadow">
									<div className="flex items-start space-x-4">
										<div className="bg-green-100 p-3 rounded-full">
											<Phone className="w-6 h-6 text-green-600" />
										</div>
										<div>
											<h3 className="font-semibold text-lg">Call Us</h3>
											<p className="text-gray-600">+234 (805) 192-7074</p>
											<p className="text-gray-600">+1 (410) 929-1326</p>
										</div>
									</div>
								</Card>

								<Card className="p-6 hover:shadow-lg transition-shadow">
									<div className="flex items-start space-x-4">
										<div className="bg-purple-100 p-3 rounded-full">
											<MapPin className="w-6 h-6 text-purple-600" />
										</div>
										<div>
											<h3 className="font-semibold text-lg">Visit Us</h3>
											<p className="text-gray-600">
												BLK C40 Maj Gen FO Okonkwo Street
											</p>
											<p className="text-gray-600">
												Post Army Estate Phase 5 Kurudu II
											</p>
											<p className="text-gray-600">Abuja FCT 900109 Nigeria</p>
										</div>
									</div>
								</Card>

								<Card className="p-6 hover:shadow-lg transition-shadow">
									<div className="flex items-start space-x-4">
										<div className="bg-orange-100 p-3 rounded-full">
											<Clock className="w-6 h-6 text-orange-600" />
										</div>
										<div>
											<h3 className="font-semibold text-lg">Business Hours</h3>
											<p className="text-gray-600">
												Monday - Friday: 9:00 AM - 6:00 PM
											</p>
											<p className="text-gray-600">
												Saturday: 10:00 AM - 4:00 PM
											</p>
											<p className="text-gray-600">Sunday: Closed</p>
										</div>
									</div>
								</Card>
							</div>

							{/* CTA */}
							<Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
								<h3 className="text-2xl font-bold mb-4">
									Free Strategy Session
								</h3>
								<p className="mb-6">
									Book a complimentary 30-minute consultation to discuss your
									business goals and discover how we can help you scale.
								</p>
								<Button
									variant="secondary"
									className="bg-white text-blue-600 hover:bg-gray-100"
								>
									Schedule Free Call
								</Button>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Google Map Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
							<p className="text-gray-600 text-lg">
								Located in the heart of the Innovation District, we're easily
								accessible and ready to welcome you.
							</p>
						</div>
						<GoogleMap />
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Contact;
