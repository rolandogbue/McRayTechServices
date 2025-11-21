import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CalendlyModalProps {
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
	delay?: number;
	size?: "default" | "sm" | "lg" | "icon";
}

const CalendlyModal = ({
	text = "Book a Session",
	url = "https://calendly.com/mcraytechservices/free-strategy-session",
	className = "",
	variant = "default",
	autoOpen = false,
	delay = 1000,
	size = "default",
}: CalendlyModalProps) => {
	const [open, setOpen] = useState(false);
	const [iframeLoaded, setIframeLoaded] = useState(false);

	// preload Calendly assets
	useEffect(() => {
		const preloadJs = document.createElement("link");
		preloadJs.rel = "preload";
		preloadJs.href = "https://assets.calendly.com/assets/external/widget.js";
		preloadJs.as = "script";

		const preloadCss = document.createElement("link");
		preloadCss.rel = "preload";
		preloadCss.href = "https://assets.calendly.com/assets/external/widget.css";
		preloadCss.as = "style";

		document.head.appendChild(preloadJs);
		document.head.appendChild(preloadCss);
	}, []);

	// Reset loader whenever modal opens
	useEffect(() => {
		if (open) {
			setIframeLoaded(false);
		}
	}, [open]);

	// Auto open after delay
	useEffect(() => {
		if (autoOpen) {
			const timer = setTimeout(() => setOpen(true), delay);
			return () => clearTimeout(timer);
		}
	}, [autoOpen, delay]);

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				className={className}
				variant={variant}
				size={size}
			>
				{text}
			</Button>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent
					className="
            p-0 
            overflow-hidden 
            rounded-2xl 
            border 
            border-border 
            bg-background 
            shadow-2xl
            w-full 
            max-w-5xl 
            h-[85vh]
          "
				>
					{!iframeLoaded && (
						<div className="flex items-center justify-center h-full animate-pulse text-sm font-medium text-indigo-950">
							Loading scheduling tool...
						</div>
					)}

					<iframe
						key={open ? "open" : "closed"} // Forces reload
						src={url}
						className={`w-full h-full border-0 transition-opacity ${
							iframeLoaded ? "opacity-100" : "opacity-0"
						}`}
						onLoad={() => setIframeLoaded(true)}
					></iframe>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default CalendlyModal;
