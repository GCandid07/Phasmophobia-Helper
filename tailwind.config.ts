import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        disabled: 'var(--color-disabled)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-highlight': 'var(--color-text-highlight)',
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
        'current-dark': 'var(--color-current-dark)',
      },
      fontFamily: {
        shadow: 'var(--font-shadows-into-light)',
        ghost: 'var(--font-october-crow)',
        roboto: 'var(--font-roboto)',
        montserrat: 'var(--font-montserrat)',
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
      boxShadow: {
        inset: 'var(--shadow-inset)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
