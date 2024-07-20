import Nav from '@components/Nav';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
export const metadata = {
  title: 'Star Wars guide',
  description: 'Find all the connections from your favorite movies series.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-white`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
