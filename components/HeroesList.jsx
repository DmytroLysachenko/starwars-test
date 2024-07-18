import HeroCard from './HeroCard';

const HeroesList = ({ heroes }) => {
  const checkDetails = (id) => {};

  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
        />
      ))}
    </ul>
  );
};

export default HeroesList;
