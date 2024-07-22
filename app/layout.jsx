import Nav from '@components/Nav';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

// Font used all over the project

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
  adjustFontFallback: false,
});

// Metadata for improving SEO

export const metadata = {
  title: 'Star Wars guide',
  description: 'Find all the connections from your favorite movies series.',
};

// Layout includes page and navigation (<Nav/>)

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-white bg-general-page scroll-smooth`}
      >
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
