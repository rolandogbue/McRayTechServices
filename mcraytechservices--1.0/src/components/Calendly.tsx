import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CalendlyProps {
	text?: string;
	url?: string;
	className?: string;
	variant?:
		| "default"
		| "primary"
		| "secondary"
		| "outline"
		| "destructive"
		| "ghost"
		| "link";
	autoOpen?: boolean;
	delay?: number; // in milliseconds
	size?: "default" | "sm" | "lg" | "icon";
}

const Calendly = ({
	text = "",
	url = "https://calendly.com/mcraytechservices/free-strategy-session",
	className = "",
	variant = "default",
	autoOpen = false,
	delay = 1000,
	size = "default",
}: CalendlyProps) => {
	const openCalendly = () => {
		// @ts-ignore
		window.Calendly.initPopupWidget({ url });
	};

	// auto open popup after delay
	useEffect(() => {
		if (autoOpen) {
			const timer = setTimeout(openCalendly, delay);
			return () => clearTimeout(timer);
		}
	}, [autoOpen, delay]);

	// style presets
	const baseStyles = "px-4 py-2 font-medium transition";
	const variantStyles = {
		default: "bg-primary text-primary-foreground hover:bg-primary/90",
		primary: "bg-blue-600 text-white hover:bg-blue-700",
		secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
		outline:
			"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
		destructive:
			"bg-destructive text-destructive-foreground hover:bg-destructive/90",
		ghost: "hover:bg-accent hover:text-accent-foreground",
		link: "text-primary underline-offset-4 hover:underline",
	};

	return (
		<Button
			onClick={openCalendly}
			className={`${baseStyles} ${variantStyles[variant]} ${className}`}
			size={size}
		>
			{text}
		</Button>
	);
};

export default Calendly;
