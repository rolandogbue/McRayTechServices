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
