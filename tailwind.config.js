/* eslint-disable no-undef */

const primaryColors = {
  50: 'var(--color-primary-50)',
  100: 'var(--color-primary-100)',
  300: 'var(--color-primary-300)',
  500: 'var(--color-primary-500)',
  700: 'var(--color-primary-700)',
  900: 'var(--color-primary-900)',
}

const primaryInvertedColors = {
  50: 'var(--color-primary-inverted-50)',
  100: 'var(--color-primary-inverted-100)',
  300: 'var(--color-primary-inverted-300)',
  500: 'var(--color-primary-inverted-500)',
  700: 'var(--color-primary-inverted-700)',
  900: 'var(--color-primary-inverted-900)',
}

const primaryForegroundColors = {
  50: 'var(--color-primary-foreground-50)',
  100: 'var(--color-primary-foreground-100)',
  300: 'var(--color-primary-foreground-300)',
  500: 'var(--color-primary-foreground-500)',
  700: 'var(--color-primary-foreground-700)',
  900: 'var(--color-primary-foreground-900)',
}

const backgroundColors = {
  50: 'var(--color-background-50)',
  100: 'var(--color-background-100)',
  300: 'var(--color-background-300)',
  500: 'var(--color-background-500)',
  700: 'var(--color-background-700)',
  900: 'var(--color-background-900)',
  darken: 'var(--color-background-darken)',
}

const foregroundColors = {
  50: 'var(--color-foreground-50)',
  100: 'var(--color-foreground-100)',
  300: 'var(--color-foreground-300)',
  500: 'var(--color-foreground-500)',
  700: 'var(--color-foreground-700)',
  900: 'var(--color-foreground-900)',
}

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './contexts/**/*.{js,ts,jsx,tsx}',
      './styles/**/*.{sass,scss,css}',
    ],
  },
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe WPC',
        'Segoe UI',
        'system-ui',
        'Ubuntu',
        'Droid Sans',
        'sans-serif',
      ],
      mono: [
        'SF Mono',
        'Monaco',
        'Menlo',
        'Consolas',
        'Ubuntu Mono',
        'Liberation Mono',
        'DejaVu Sans Mono',
        'Courier New',
        'monospace',
      ],
    },
    colors: {},
    extend: {
      textColor: {
        ...foregroundColors,
        primary: primaryColors,
        on: {
          primary: primaryInvertedColors,
        },
        fg: {
          primary: primaryForegroundColors,
        },
      },
      backgroundColor: {
        ...backgroundColors,
        primary: primaryColors,
        fg: {
          ...foregroundColors,
          primary: primaryColors,
        },
      },
      borderColor: {
        background: backgroundColors,
        foreground: foregroundColors,
        primary: primaryColors,
        bg: {
          primary: primaryColors,
        },
      },
    },
  },
}
