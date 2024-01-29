/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "product-sans": "Product Sans",
        anton: "Anton",
      },
      colors: {
        // Error
        error50: "#FEF2F2",
        error100: "#FEE2E2",
        error200: "#FECACA",
        error300: "#FCA5A5",
        error400: "#F87171",
        error500: "#EF4444",
        error600: "#DC2626",
        error700: "#B91C1C",
        // Gray
        gray50: "#F8FAFC",
        gray100: "#F1F5F9",
        gray200: "#E2E8F0",
        gray300: "#CBD5E1",
        gray400: "#9DA4AE",
        gray500: "#64748B",
        gray600: "#475569",
        gray700: "#334155",
        // Info
        infoBlue: "#0052EA",
        infoBlueLight: "#F1F6FD",
        // Primary
        primaryLight: "#404040",
        // Success
        success50: "#F0FDF4",
        success100: "#DCFCE7",
        success200: "#BBF7D0",
        success300: "#86EFAC",
        success400: "#4ADE80",
        success500: "#4ADE80",
        success600: "#16A34A",
        success700: "#15803D",
        // Warning
        warning50: "#FFFFBEB",
        warning100: "#FEF3C7",
        warning200: "#FDE68A",
        warning300: "#FCD34D",
        warning400: "#FBBF24",
        warning500: "#F59E0B",
        warning600: "#D97706",
        warning700: "#B45309",

        // Shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        stn: "url(/src/assets/stn_avengers.png)",
      },
      screens: {
        sm: "640px", // Small screens and above (640px)
        md: "768px", // Medium screens and above (768px)
        lg: "1024px", // Large screens and above (1024px)
        xl: "1400px", // Extra-large screens and above (1280px)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
