import { LOGO_CONFIG } from "@/config/logo";

interface LogoProps {
	variant?: "header" | "footer";
	className?: string;
}

const Logo = ({ variant = "header", className = "" }: LogoProps) => {
	const img = LOGO_CONFIG[variant];

	return (
		<a href="/" className={`inline-block ${className}`}>
			{LOGO_CONFIG.mode === "image" ? (
				<img
					src={img.src}
					alt={img.alt}
					height={img.height}
					style={{ height: `${img.height}px`, width: "auto" }}
					className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
				/>
			) : (
				<span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-opacity hover:opacity-80">
					{LOGO_CONFIG.text}
				</span>
			)}
		</a>
	);
};

export default Logo;
