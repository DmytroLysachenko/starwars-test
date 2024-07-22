import HeroCard from './HeroCard';

// Heroes list component mapping heroes array to list of cards

const HeroesList = ({ heroes }) => {
  // As a prop getting only heroes array then mapping it to HeroCard components

  return (
    <ul className="flex flex-wrap gap-4 justify-center max-w-[1200px] mx-auto">
      {heroes.map((hero) => (
        <li key={hero.id}>
          <HeroCard
            showMore={true}
            hero={hero}
          />
        </li>
      ))}
    </ul>
  );
};

export default HeroesList;
