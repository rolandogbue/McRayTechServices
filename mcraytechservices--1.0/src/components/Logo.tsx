// import { LOGO_CONFIG } from "@/config/logo";

// interface LogoProps {
// 	variant?: "header" | "footer";
// 	className?: string;
// }

// const Logo = ({ variant = "header", className = "" }: LogoProps) => {
// 	const img = LOGO_CONFIG[variant];

// 	return (
// 		<a href="/" className={`inline-block ${className}`}>
// 			{LOGO_CONFIG.mode === "image" ? (
// 				<img
// 					src={img.src}
// 					alt={img.alt}
// 					height={img.height}
// 					style={{ height: `${img.height}px`, width: "auto" }}
// 					className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
// 				/>
// 			) : (
// 				<span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-opacity hover:opacity-80">
// 					{LOGO_CONFIG.text}
// 				</span>
// 			)}
// 		</a>
// 	);
// };

// export default Logo;

import { LOGO_CONFIG } from "@/config/logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  variant?: "header" | "footer";
  className?: string;
}

const Logo = ({ variant = "header", className = "" }: LogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const activeTheme = resolvedTheme === "dark" ? "dark" : "light";
  const logo = LOGO_CONFIG[variant][activeTheme];

  return (
    <a href="/" className={`inline-block ${className}`}>
      {LOGO_CONFIG.mode === "image" ? (
        <img
          src={logo.src}
          alt={logo.alt}
          height={logo.height}
          style={{ height: `${logo.height}px`, width: "auto" }}
          className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
        />
      ) : (
        <span className="text-2xl font-bold gradient-text hover:opacity-80">
          {LOGO_CONFIG.text}
        </span>
      )}
    </a>
  );
};

export default Logo;
