import FilmCard from './FilmCard';
import StarshipCard from './StarshipCard';

// Wrapper component for determining which cards should be rendered in DescriptionCardsSlider

const CardWrapper = ({ keyObject, type }) => {
  switch (type) {
    case 'Films':
      return <FilmCard film={keyObject} />;

    case 'Starships':
      return <StarshipCard starship={keyObject} />;
    default:
      return null;
  }
};

export default CardWrapper;
