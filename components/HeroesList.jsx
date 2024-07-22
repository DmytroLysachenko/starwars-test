'use client';

import dynamic from 'next/dynamic';

const HeroCard = dynamic(() => import('@components/HeroCard'), {
  loading: () => (
    <div className="w-80 h-[400px] p-5 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-800 via-purple-700 to-gray-800 m-4 border-solid border-2 border-yellow-500 hover:scale-110 transition-all flex flex-col size-full justify-between"></div>
  ),
});

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
