import {
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaFacebookF,
} from "react-icons/fa";

interface SocialButtonProps {
	platform: "instagram" | "linkedin" | "twitter" | "facebook";
	href: string;
	size?: string; // optional (e.g., w-10 h-10)
}

const SocialButton = ({
	platform,
	href,
	size = "w-10 h-10",
}: SocialButtonProps) => {
	const styles: Record<string, string> = {
		instagram:
			"bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-700 hover:opacity-90",
		linkedin: "bg-blue-700 hover:bg-blue-800",
		twitter: "bg-sky-500 hover:bg-sky-600",
		facebook: "bg-blue-600 hover:bg-blue-700",
	};

	const icons: Record<string, JSX.Element> = {
		instagram: <FaInstagram size={18} />,
		linkedin: <FaLinkedinIn size={18} />,
		twitter: <FaTwitter size={18} />,
		facebook: <FaFacebookF size={18} />,
	};

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`${size} ${styles[platform]} text-white rounded-full flex items-center justify-center transition-colors cursor-pointer`}
		>
			{icons[platform]}
		</a>
	);
};

export default SocialButton;
