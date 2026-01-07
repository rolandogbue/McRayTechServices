// export const LOGO_CONFIG = {
// 	mode: "image" as "image" | "text", // Change to "image" to use an image logo
// 	text: "McRayTechServices",

// 	header: {
// 		src: "/logo.png", // logo should be inside public folder
// 		alt: "McRay Tech Services Logo",
// 		height: 40, // Height in pixels for image logos
// 	},
// 	footer: {
// 		src: "/logo1.png",
// 		alt: "McRay Tech Services Logo White",
// 		height: 40,
// 	},
// };

// config/logo.ts

export const LOGO_CONFIG = {
  mode: "image" as "image" | "text",

  text: "McRayTechServices",

  header: {
    light: {
      src: "/logo.png",
      alt: "McRay Tech Services Logo",
      height: 40,
    },
    dark: {
      src: "/logo1.png",
      alt: "McRay Tech Services Logo (Dark)",
      height: 40,
    },
  },

  footer: {
    light: {
      src: "/logo.png",
      alt: "McRay Tech Services Logo White",
      height: 40,
    },
    dark: {
      src: "/logo1.png",
      alt: "McRay Tech Services Logo White",
      height: 40,
    },
  },
} as const;
