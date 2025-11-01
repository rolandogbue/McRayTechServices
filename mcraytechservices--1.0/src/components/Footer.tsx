import { Separator } from "@/components/ui/separator";
import SocialButton from "@/components/SocialButton";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-16">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div className="col-span-1 md:col-span-2">
						<div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
							McRayTechServices
						</div>
						<p className="text-gray-300 mb-6 leading-relaxed max-w-md">
							The all-in-one business growth solution that helps SMBs scale
							faster with less hassle. One partner, all solutions.
						</p>
						<div className="flex space-x-4">
							{/* <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
								<a
									className="text-sm font-bold"
									href="https://facebook.com/mcraytechservices"
									target="_blank"
									rel="noopener noreferrer"
								>
									f
								</a>
							</div>
							<div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-700 rounded-full flex items-center justify-center hover:opacity-90 transition cursor-pointer">
								<a
									className="text-sm font-bold"
									href="https://instagram.com/mcray_services"
									target="_blank"
									rel="noopener noreferrer"
								>
									IG
								</a>
							</div>
							<div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
								<a
									className="text-sm font-bold"
									href="https://linkedin.com/company/mcraytechservices"
									target="_blank"
									rel="noopener noreferrer"
								>
									in
								</a>
							</div> */}
							<div className="flex gap-3">
								<SocialButton
									platform="instagram"
									href="https://instagram.com/mcray_services"
								/>
								<SocialButton
									platform="linkedin"
									href="https://linkedin.com/company/mcraytechservices"
								/>
								<SocialButton
									platform="twitter"
									href="https://twitter.com/services78078"
								/>
								<SocialButton
									platform="facebook"
									href="https://facebook.com/mcraytechservices"
								/>
							</div>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-xl font-semibold mb-6">Services</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Brand Identity
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Website Development
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									SEO & Marketing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Business Automation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Social Media Managment
								</a>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-xl font-semibold mb-6">Company</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Case Studies
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
				</div>

				<Separator className="bg-gray-700 mb-8" />

				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">
						© 2025 McRay Tech Services Ltd. All rights reserved
					</p>
					<p className="text-gray-400 text-sm mt-4 md:mt-0">
						<a href="http://jetmotorsauto.com" target="_blank" rel="jetmotors">
							⚙️ Parent company of JetMotors
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
