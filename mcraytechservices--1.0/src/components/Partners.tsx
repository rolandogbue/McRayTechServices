import { partners } from "@/config/partners";
import { Badge } from "@/components/ui/badge";

const Partners = () => {
	// Duplicate partners array for seamless infinite scroll
	const duplicatedPartners = [...partners, ...partners];

	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<div className="flex justify-center mb-4">
						<Badge variant="secondary" className="text-sm px-4 py-1">
							Trusted Partners
						</Badge>
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
						Trusted by Leading Brands
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Join hundreds of successful businesses that trust us to accelerate
						their growth
					</p>
				</div>

				{/* Constrained scroll container with max-width */}
				<div className="max-w-6xl mx-auto relative overflow-hidden">
					{/* Gradient overlays for smooth fade effect */}
					<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

					{/* Scrolling track */}
					<div className="flex gap-8 animate-scroll hover:pause-animation p-6">
						{duplicatedPartners.map((partner, index) => (
							<div key={`${partner.name}-${index}`} className="flex-shrink-0">
								<div className="w-44 h-28 flex items-center justify-center p-6 rounded-2xl bg-background shadow-md transition-all hover:scale-105 hover:shadow-xl z-30">
									<img
										src={partner.logoSrc}
										alt={`${partner.name} logo`}
										className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
										loading="lazy"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<style>
				{`
					@keyframes scroll {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(-100%);
						}
					}

					.animate-scroll {
						animation: scroll 32s linear 0s infinite normal none;;
					}

					.animate-scroll:hover {
						animation-play-state: paused;
					}
				`}
			</style>
		</section>
	);
};

export default Partners;
