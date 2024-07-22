const { screen, render, fireEvent } = require('@testing-library/react');

import { useRouter } from 'next/navigation';

import SearchBar from '@components/SearchBar';

// Mocking next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mocking child components
jest.mock('../../components/SearchInput', () => (props) => (
  <input
    data-testid="search-input"
    value={props.name}
    onChange={(e) => props.setName(e.target.value)}
  />
));

jest.mock('../../components/SearchButton', () => () => (
  <button type="submit">Search</button>
));

describe('SearchBar Component', () => {
  let mockPush;
  let mockRouter;

  beforeEach(() => {
    mockPush = jest.fn();
    mockRouter = { push: mockPush };
    useRouter.mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with child components', () => {
    render(<SearchBar />);

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    render(<SearchBar />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });

  it('updates URL and calls router.push on form submission', () => {
    render(<SearchBar />);

    // Change input value
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'test' } });

    // Submit the form
    const button = screen.getByText('Search');
    fireEvent.click(button);

    // Check that router.push was called with correct URL
    expect(mockPush).toHaveBeenCalledWith(
      expect.stringContaining('/?name=test&page=1')
    );
  });

  it('does not update URL if input is empty', () => {
    render(<SearchBar />);

    // Submit the form with empty input
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: '' } });

    const button = screen.getByText('Search');
    fireEvent.click(button);

    // Check that router.push was called with URL without 'name' parameter
    expect(mockPush).not.toHaveBeenCalledWith(
      expect.stringContaining('?name=')
    );
  });
});
