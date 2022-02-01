module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '376px',
      },
      backgroundImage: {
        'desktop-pattern': "url('/public/pattern-background-desktop.svg')",
        'mobile-pattern': "url('/public/pattern-background-mobile.svg')",
      },
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        'red-hat-display': ['Red Hat Display', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
