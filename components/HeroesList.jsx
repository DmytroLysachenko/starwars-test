import HeroCard from './HeroCard';

const HeroesList = ({ heroes }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center max-w-[1200px] mx-auto  mt-8">
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
