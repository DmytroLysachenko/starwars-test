const { screen, render, fireEvent } = require('@testing-library/react');
import Nav from '@components/Nav';

// Mock Next.js components and hooks
jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
);
jest.mock('next/image', () => (props) => <img {...props} />);
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

// Mock ScrollUpButton component
jest.mock('../../components/ScrollUpButton', () => ({
  __esModule: true,
  default: ({ jumpToTop }) => <button onClick={jumpToTop}>Scroll Up</button>,
}));

describe('Nav Component', () => {
  it('renders navigation links correctly', () => {
    render(<Nav />);

    expect(screen.getByAltText('Navigation starship')).toBeInTheDocument();
    expect(screen.getByAltText('Jedi logo')).toBeInTheDocument();
  });

  it('renders scroll-up button when scrolled down', () => {
    render(<Nav />);

    // Simulate scrolling
    global.scrollTo = jest.fn(); // Mock scrollTo
    window.scrollY = 300;
    fireEvent.scroll(window);

    // Re-render or update component
    expect(screen.getByText('Scroll Up')).toBeInTheDocument();
  });

  it('does not render scroll-up button initially', () => {
    render(<Nav />);

    // Check that scroll-up button is not initially rendered
    expect(screen.queryByText('Scroll Up')).not.toBeInTheDocument();
  });

  it('scrolls to top when scroll-up button is clicked', () => {
    render(<Nav />);

    // Simulate scrolling
    global.scrollTo = jest.fn();
    window.scrollY = 300;
    fireEvent.scroll(window);

    // Simulate button click
    const scrollUpButton = screen.getByText('Scroll Up');
    fireEvent.click(scrollUpButton);

    // Check if scrollTo was called with correct parameters
    expect(global.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
