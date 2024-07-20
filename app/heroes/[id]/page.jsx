import HeroFlow from '@components/HeroFlow';
import Page from '@components/Page';
import ShipsDescription from '@components/ShipsDescription';

import { fetchDataById, fetchDataByIdArray } from '@utils/starWarsAPI';

const SingleHeroPage = async ({ params }) => {
  const id = params.id;
  const hero = await fetchDataById('people', id);
  const films = await fetchDataByIdArray('films', hero.films);

  let starships = [];
  const starshipsIdArray = [];
  for (const film of films) {
    starshipsIdArray.push(...film.starships);
  }
  if (starshipsIdArray && starshipsIdArray.length > 0) {
    const uniqueStarshipsIds = starshipsIdArray.filter(
      (id) => starshipsIdArray.indexOf(id) === starshipsIdArray.lastIndexOf(id)
    );

    starships = await fetchDataByIdArray('starships', uniqueStarshipsIds);
  }

  return (
    <Page>
      <div className="flex flex-col gap-8 items-center w-full h-full">
        <ShipsDescription starships={starships} />
        <HeroFlow
          hero={hero}
          films={films}
          starships={starships}
        />
      </div>
    </Page>
  );
};

export default SingleHeroPage;
