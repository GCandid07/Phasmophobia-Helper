import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-highlight': 'var(--color-text-highlight)',
        alert: 'var(--color-alert)',
      },
      fontFamily: {
        'shadow': 'var(--font-shadows-into-light)',
        'ghost': 'var(--font-october-crow)',
        'roboto': 'var(--font-roboto)',
        'montserrat': 'var(--font-montserrat)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      spacing: {
        small: 'var(--spacing-small)',
        medium: 'var(--spacing-medium)',
        large: 'var(--spacing-large)',
        xlarge: 'var(--spacing-xlarge)',
      },
    },
  },
  plugins: [],
};
export default config;
