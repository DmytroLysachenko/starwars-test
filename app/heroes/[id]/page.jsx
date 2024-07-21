import HeroFlow from '@components/HeroFlow';
import Page from '@components/Page';
import ShipsDescription from '@components/ShipsDescription';
import { starships } from '@constants/testingConstants';
import { createHeroStarshipsIdsArray } from '@utils/createHeroStarshipsIdsArray';

import { fetchDataById, fetchDataByIdArray } from '@utils/starWarsAPI';

const SingleHeroPage = async ({ params }) => {
  const id = params.id;
  const hero = await fetchDataById('people', id);
  const films = await fetchDataByIdArray('films', hero.films);
  const heroStarshipsIdsArray = createHeroStarshipsIdsArray(hero, films);
  if (heroStarshipsIdsArray.length > 0) {
    const starships = await fetchDataByIdArray(
      'starships',
      heroStarshipsIdsArray
    );
  } else {
    starships = [];
  }

  return (
    <Page>
      <div className="flex flex-col gap-8 items-center px-5 w-full h-full">
        {starships && starships.length && (
          <ShipsDescription starships={starships} />
        )}
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
