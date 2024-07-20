import HeroCard from './HeroCard';

const HeroesList = ({ heroes, page }) => {
  return (
    <ul className="grid gap-4 justify-center md:grid-cols-2 xl:grid-cols-3 mt-8">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          page={page}
        />
      ))}
    </ul>
  );
};

export default HeroesList;
