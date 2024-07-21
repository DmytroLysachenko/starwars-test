import HeroFlow from '@components/HeroFlow';
import Page from '@components/Page';
import ShipsDescription from '@components/ShipsDescription';
import { createUniqueStarshipsIdsArray } from '@utils/createUniqueStarshipsIdsArray';

import { fetchDataById, fetchDataByIdArray } from '@utils/starWarsAPI';

const SingleHeroPage = async ({ params }) => {
  const id = params.id;
  const hero = await fetchDataById('people', id);
  const films = await fetchDataByIdArray('films', hero.films);
  const uniqueStarshipsIdsArray = createUniqueStarshipsIdsArray(films);
  const starships = await fetchDataByIdArray(
    'starships',
    uniqueStarshipsIdsArray
  );
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
