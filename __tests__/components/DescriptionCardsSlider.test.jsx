import DescriptionCardsSlider from '@components/DescriptionCardsSlider';
import { useMedia } from '@hooks/useMedia';

const { screen, render, fireEvent } = require('@testing-library/react');

jest.mock('@hooks/useMedia', () => ({
  useMedia: jest.fn(),
}));
const mockUseMedia = useMedia;

describe('DescriptionCardsSlider', () => {
  beforeEach(() => {
    mockUseMedia.mockReturnValue({
      isTablet: false,
      isDesktop: false,
    });
  });

  const title = 'Films';
  const array = [
    { id: 1, title: 'Film 1' },
    { id: 2, title: 'Film 2' },
    { id: 3, title: 'Film 3' },
    { id: 4, title: 'Film 4' },
  ];

  it('renders correctly with title and first card', () => {
    render(
      <DescriptionCardsSlider
        title={title}
        array={array}
      />
    );

    expect(screen.getByText(`${title} information:`)).toBeInTheDocument();
    expect(screen.getByText('Film 1')).toBeInTheDocument();
  });

  it('navigates to the next card on right arrow click', () => {
    render(
      <DescriptionCardsSlider
        title={title}
        array={array}
      />
    );

    const rightArrowButton = screen.getByTestId(`${title} next`, {
      title: /arrow-right/i,
    });
    fireEvent.click(rightArrowButton);

    expect(screen.getByText('Film 2')).toBeInTheDocument();
  });

  it('navigates to the previous card on left arrow click', () => {
    render(
      <DescriptionCardsSlider
        title={title}
        array={array}
      />
    );

    const rightArrowButton = screen.getByTestId(`${title} next`, {
      title: /arrow-right/i,
    });
    fireEvent.click(rightArrowButton);

    const leftArrowButton = screen.getByTestId(`${title} prev`, {
      title: /arrow-left/i,
    });
    fireEvent.click(leftArrowButton);

    expect(screen.getByText('Film 1')).toBeInTheDocument();
  });

  it('displays multiple cards on tablet', () => {
    mockUseMedia.mockReturnValue({
      isTablet: true,
      isDesktop: false,
    });

    render(
      <DescriptionCardsSlider
        title={title}
        array={array}
      />
    );

    expect(screen.getByText('Film 1')).toBeInTheDocument();
    expect(screen.getByText('Film 2')).toBeInTheDocument();
  });

  it('displays multiple cards on desktop', () => {
    mockUseMedia.mockReturnValue({
      isTablet: true,
      isDesktop: true,
    });

    render(
      <DescriptionCardsSlider
        title={title}
        array={array}
      />
    );

    expect(screen.getByText('Film 1')).toBeInTheDocument();
    expect(screen.getByText('Film 2')).toBeInTheDocument();
    expect(screen.getByText('Film 3')).toBeInTheDocument();
  });

  it('renders correctly without crashing when array is empty', () => {
    render(
      <DescriptionCardsSlider
        title={title}
        array={[]}
      />
    );

    expect(screen.getByText(`${title} information:`)).toBeInTheDocument();
  });
});
