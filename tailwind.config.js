/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        full: "100%",
      },
      lineHeight: {
        "extra-line": "58px",
      },
      colors: {
        primary: "#878787",
        secondary: "#585858",
        tertiary: "#f8f8f8",
        primary4: "#183756",
      },
      backgroundImage: {
        banner: "url('./images/banner.png')",
      },
      dropShadow: {
        customShadow: "0px 10px 15px -3px rgba(17, 24, 39, 0.16)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "uncut-sans": ["Uncut Sans", "sans-serif"],
        "Brave-EightyOne": ["Brave"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.01em" }],
        "3xl": ["1.875rem", { lineHeight: "1.333", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.277", letterSpacing: "-0.01em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "6xl": ["3.75rem", { lineHeight: "1.166", letterSpacing: "-0.01em" }],
        "7xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
        tighest: "-0.4px",
        tighest2: "-0.25px",
        widest2: "-0.5px",
        widest3: "-0.6875px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    // require('@tailwindcss/forms'),
  ],
};
