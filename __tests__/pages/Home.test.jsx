const { default: Home } = require('../../app/page');
const { render, screen, fireEvent } = require('@testing-library/react');

test('should have heading text', () => {
  render(<Home />);
  expect(screen.getByText('Discover Your Star Wars Hero')).toBeInTheDocument;
});

test('should navigate to Heroes page when link is clicked', () => {
  render(<Home />);
  const link = screen.getByText('Get Started');
  expect(link.hasAttribute('href', '/heroes'));
});

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  usePathname() {
    return {
      prefetch: () => null,
    };
  },
}));
