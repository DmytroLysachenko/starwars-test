import CheckboxInput from '@components/CheckboxInput';
const { screen, render, fireEvent } = require('@testing-library/react');

// Mock function for changeNodesAndEdges
const mockChangeNodesAndEdges = jest.fn();

describe('CheckboxInput', () => {
  // Clear mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the checkbox input with correct label and id', () => {
    const film = { id: '1', title: 'Test Film' };
    const index = 0;

    render(
      <CheckboxInput
        film={film}
        index={index}
        changeNodesAndEdges={mockChangeNodesAndEdges}
      />
    );

    // Check if the label and checkbox are rendered
    expect(screen.getByLabelText(`"Test Film" - hidden`)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('calls changeNodesAndEdges with correct arguments when checkbox is toggled', () => {
    const film = { id: '1', title: 'Test Film' };
    const index = 0;

    render(
      <CheckboxInput
        film={film}
        index={index}
        changeNodesAndEdges={mockChangeNodesAndEdges}
      />
    );

    const checkbox = screen.getByRole('checkbox');

    // Simulate checkbox change event
    fireEvent.click(checkbox);

    // Expect the mock function to have been called with the correct arguments
    expect(mockChangeNodesAndEdges).toHaveBeenCalledWith('film-1', true);

    // Simulate checkbox change event again (to unchecked)
    fireEvent.click(checkbox);

    // Expect the mock function to have been called with the correct arguments
    expect(mockChangeNodesAndEdges).toHaveBeenCalledWith('film-1', false);
  });

  it('applies correct styling based on index', () => {
    const film = { id: '1', title: 'Test Film' };
    const index = 2;

    render(
      <CheckboxInput
        film={film}
        index={index}
        changeNodesAndEdges={mockChangeNodesAndEdges}
      />
    );

    const checkboxContainer = screen
      .getByLabelText(`"Test Film" - hidden`)
      .closest('div');

    // Check if the container has the correct style based on index
    expect(checkboxContainer).toHaveStyle(`top: ${20 * index}px`);
  });
});
