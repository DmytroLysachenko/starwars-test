import Nav from '@components/Nav';
import '@styles/globals.css';

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
      </body>
    </html>
  );
};

export default RootLayout;
