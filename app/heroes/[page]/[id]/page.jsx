import HeroFlow from '@components/HeroFlow';
import Page from '@components/Page';
import { getLastValueFromHeader } from '@utils/getLastValueFromHeader';
import { fetchHeroById, fetchHeroKeyList } from '@utils/starWarsAPI';
import { headers } from 'next/headers';

const SingleHeroPage = async () => {
  const headersList = headers();
  const id = getLastValueFromHeader(headersList);

  const hero = await fetchHeroById(id);
  if (hero.starships && hero.starships.length > 0) {
    const starships = await fetchHeroKeyList('starships', hero.starships);
    hero.starships = [...starships];
  }
  if (hero.films && hero.films.length > 0) {
    const films = await fetchHeroKeyList('films', hero.films);
    hero.films = [...films];
  }

  return (
    <Page>
      <div className="flex w-full h-full p-1">
        <HeroFlow hero={hero} />
      </div>
    </Page>
  );
};

export default SingleHeroPage;
