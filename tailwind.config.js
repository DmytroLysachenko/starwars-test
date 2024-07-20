module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
      spacing: {
        mobPageHeight: 'calc(100vh - 56px)',
        tabPageHeight: 'calc(100vh - 80px)',
      },
      backgroundImage: {
        'general-page':
          'linear-gradient(90deg, rgba(1, 22, 53, 1) 0%, rgba(1, 22, 53, 0.9) 20%, rgba(1, 22, 53, 0.95) 80%, rgba(1, 22, 53, 1) 100%)',
        'hero-pattern':
          'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(34, 61, 210, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%), url(https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) ',
      },
    },
  },
  plugins: [],
};
