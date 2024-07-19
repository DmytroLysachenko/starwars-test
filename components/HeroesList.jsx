import HeroCard from './HeroCard';

const HeroesList = ({ heroes, page }) => {
  console.log(heroes);
  return (
    <ul className="grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 mt-8">
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
