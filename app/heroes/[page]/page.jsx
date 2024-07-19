import HeroesList from '@components/HeroesList';
import Page from '@components/Page';
import Pagination from '@components/Pagination';
import { getLastValueFromHeader } from '@utils/getLastValueFromHeader';
import { fetchHeroes } from '@utils/starWarsAPI';
import { headers } from 'next/headers';

const HeroesListPage = async () => {
  const headersList = headers();

  const page = getLastValueFromHeader(headersList);
  const data = await fetchHeroes(page);

  return (
    <Page>
      <section className="flex flex-col gap-10 justify-between items-center h-full">
        <HeroesList
          heroes={data.results}
          page={page}
        />
        <Pagination
          total={data.count}
          page={page}
        />
      </section>
    </Page>
  );
};

export default HeroesListPage;
