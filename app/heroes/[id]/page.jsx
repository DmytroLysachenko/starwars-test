import DescriptionCardsSlider from '@components/DescriptionCardsSlider';
import HeroCard from '@components/HeroCard';
import HeroGraph from '@components/HeroGraph';

import Page from '@components/Page';

import { createHeroStarshipsIdsArray } from '@utils/createHeroStarshipsIdsArray';
import { fetchDataById, fetchDataByIdArray } from '@utils/starWarsAPI';

// Server side generated Page with fetched detailed information about the hero, films and starships

const SingleHeroPage = async ({ params }) => {
  // Getting id of hero from params prop

  const id = Number(params.id);

  // Fetching all neccessary information on hero and fims with the hero

  const hero = await fetchDataById('people', id);
  const films = await fetchDataByIdArray('films', hero.films);

  // Function creating array of starships, where hero was in mentioned films. As params getting hero obj and films array

  const heroStarshipsIdsArray = createHeroStarshipsIdsArray(hero, films);

  // Fetching information on required starships

  const starships = await fetchDataByIdArray(
    'starships',
    heroStarshipsIdsArray
  );

  // Page includes Hero Description card, Films Description card, Starships description cards and React chart flow with info fetched before

  return (
    <Page>
      <div className="flex flex-col gap-8 items-center px-5 w-full h-full">
        <div>
          <h2 className="text-3xl text-center">Hero Information:</h2>
          <HeroCard
            hero={hero}
            showMore={false}
          />
        </div>

        {films && films.length && (
          <DescriptionCardsSlider
            suppressHydrationWarning={true}
            title={'Films'}
            array={films}
          />
        )}

        {starships && starships.length && (
          <DescriptionCardsSlider
            title={'Starships'}
            array={starships}
          />
        )}
        <HeroGraph
          hero={hero}
          films={films}
          starships={starships}
        />
      </div>
    </Page>
  );
};

export default SingleHeroPage;
