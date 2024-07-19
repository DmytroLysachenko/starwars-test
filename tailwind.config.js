module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        mobPageHeight: 'calc(100vh - 56px)',
        tabPageHeight: 'calc(100vh - 80px)',
      },
    },
  },
  plugins: [],
};
