import Pagination from '@components/Pagination';
const { screen, render, fireEvent } = require('@testing-library/react');

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

// Mock next/navigation hooks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockReplace = jest.fn();

describe('Pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock the hooks
    useRouter.mockReturnValue({ replace: mockReplace });
    usePathname.mockReturnValue('/current-path');
    useSearchParams.mockReturnValue(new URLSearchParams({ page: '1' }));
  });

  it('renders current page and navigation button correctly', () => {
    render(<Pagination total={30} />);

    // Check if the current page number is rendered
    expect(screen.getByText('1')).toBeInTheDocument();

    // Check if navigation button next is present
    expect(screen.getByTestId('Pagination next')).toBeInTheDocument();
  });

  it('does not render the previous button on the first page', () => {
    useSearchParams.mockReturnValue(new URLSearchParams({ page: '1' }));
    render(<Pagination total={30} />);

    // Check if the previous button is not rendered
    expect(screen.queryByTestId('Pagination prev')).toBeNull();
  });

  it('does not render the next button on the last page', () => {
    useSearchParams.mockReturnValue(new URLSearchParams({ page: '3' }));
    render(<Pagination total={30} />);

    // Check if the next button is not rendered
    expect(screen.queryByTestId('Pagination next')).toBeNull();
  });

  it('updates the URL with the correct page number on button click', () => {
    render(<Pagination total={30} />);

    // Click the next page button
    fireEvent.click(screen.getByTestId('Pagination next'));

    // Check if the URL has been updated correctly
    expect(mockReplace).toHaveBeenCalledWith('/current-path?page=2');
  });

  it('updates the URL correctly when current page is not 1', () => {
    useSearchParams.mockReturnValue(new URLSearchParams({ page: '2' }));
    render(<Pagination total={30} />);

    // Click the previous page button
    fireEvent.click(screen.getByTestId('Pagination prev'));

    // Check if the URL has been updated correctly
    expect(mockReplace).toHaveBeenCalledWith('/current-path?page=1');
  });

  it('updates the URL correctly when total pages are more than the current page', () => {
    useSearchParams.mockReturnValue(new URLSearchParams({ page: '2' }));
    render(<Pagination total={30} />);

    // Click the next page button
    fireEvent.click(screen.getByTestId('Pagination next'));

    // Check if the URL has been updated correctly
    expect(mockReplace).toHaveBeenCalledWith('/current-path?page=3');
  });
});
