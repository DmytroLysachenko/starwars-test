import Home from '@app/page';

const { screen, render } = require('@testing-library/react');

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

test('should have heading text', () => {
  render(<Home />);
  expect(screen.getByText('Discover Your Star Wars Hero')).toBeInTheDocument();
});

test('should navigate to Heroes page when link is clicked', () => {
  render(<Home />);
  const link = screen.getByText('Get Started');
  expect(link.hasAttribute('href', '/heroes'));
});
