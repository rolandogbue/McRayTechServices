import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
	const navLinks = [
		{ label: "Services", href: "#services" },
		{ label: "Process", href: "#process" },
		{ label: "Benefits", href: "#benefits" },
		{ label: "Blog", href: "/blog" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Contact", href: "/contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<a
							href="/"
							className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
						>
							McRayTechServices
						</a>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className="hidden md:flex items-center space-x-4">
						<Button
							variant="outline"
							className="border-blue-600 text-blue-600 hover:bg-blue-50"
						>
							Login
						</Button>
						{/* <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
							Get Started
						</Button> */}
					</div>

					{/* Mobile Navigation */}
					<Sheet>
						<SheetTrigger asChild className="md:hidden">
							<Button variant="outline" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent>
							<div className="flex flex-col space-y-6 mt-8">
								{navLinks.map((link) => (
									<a
										key={link.label}
										href={link.href}
										className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
									>
										{link.label}
									</a>
								))}
								<div className="flex flex-col space-y-3 pt-6">
									<Button
										variant="outline"
										className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
									>
										Login
									</Button>
									{/* <Button className="border-blue-600 text-blue-600">
										Get Started
									</Button> */}
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Header;
