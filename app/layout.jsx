import Nav from '@components/Nav';
import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export const metadata = {
  title: 'Star Wars guide',
  description: 'Find all the connections from your favorite movies series.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className={roboto.className}>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
