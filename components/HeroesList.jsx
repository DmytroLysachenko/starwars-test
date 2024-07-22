import HeroCard from './HeroCard';

// Heroes list component mapping heroes array to list of cards

const HeroesList = ({ heroes }) => {
  // As a prop getting only heroes array then mapping it to HeroCard components

  return (
    <ul className="flex flex-wrap gap-4 justify-center max-w-[1200px] mx-auto  mt-8">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          showMore={true}
          hero={hero}
        />
      ))}
    </ul>
  );
};

export default HeroesList;
