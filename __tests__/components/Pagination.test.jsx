import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from '@components/Pagination';
import { fireEvent, render, screen } from '@testing-library/react';

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
  useSearchParams() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Pagination', () => {
  const replaceMock = jest.fn();
  const pathnameMock = '/heroes';

  beforeEach(() => {
    jest.clearAllMocks();
    usePathname.mockReturnValue(pathnameMock);
    useRouter.mockReturnValue({ replace: replaceMock });
  });

  const renderComponent = (page = 1, total = 100) => {
    useSearchParams.mockReturnValue({
      get: (param) => (param === 'page' ? page.toString() : null),
    });

    return render(<Pagination total={total} />);
  };

  it('renders the current page number', () => {
    renderComponent(1, 100);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not render the previous button on the first page', () => {
    renderComponent(1, 100);
    expect(
      screen.queryByRole('button', { name: /left/i })
    ).not.toBeInTheDocument();
  });

  it('renders the next button when not on the last page', () => {
    renderComponent(1, 100);
    expect(screen.getByRole('button', { name: /right/i })).toBeInTheDocument();
  });

  it('calls replace with correct URL when next button is clicked', () => {
    renderComponent(1, 100);
    fireEvent.click(screen.getByRole('button', { name: /right/i }));
    expect(replaceMock).toHaveBeenCalledWith(`${pathnameMock}?page=2`);
  });

  it('renders the previous button when not on the first page', () => {
    renderComponent(2, 100);
    expect(screen.getByRole('button', { name: /left/i })).toBeInTheDocument();
  });

  it('calls replace with correct URL when previous button is clicked', () => {
    renderComponent(2, 100);
    fireEvent.click(screen.getByRole('button', { name: /left/i }));
    expect(replaceMock).toHaveBeenCalledWith(`${pathnameMock}?page=1`);
  });

  it('does not render the next button on the last page', () => {
    renderComponent(10, 100);
    expect(
      screen.queryByRole('button', { name: /right/i })
    ).not.toBeInTheDocument();
  });

  it('handles large total numbers correctly', () => {
    renderComponent(5, 150);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /left/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /right/i })).toBeInTheDocument();
  });
});
