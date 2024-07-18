import Nav from '@components/Nav';
import '../styles/globals.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Star Wars guide',
  description: 'Find all the connections from your favorite movies series.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="app">{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
