import HeroesList from '@components/HeroesList';
import Page from '@components/Page';
import Pagination from '@components/Pagination';
import SearchBar from '@components/SearchBar';
import { fetchHeroes } from '@utils/starWarsAPI';

const HeroesListPage = async ({ searchParams }) => {
  const { page, name } = searchParams;
  const data = await fetchHeroes(page, name);

  return (
    <Page>
      <SearchBar />
      {data.results && data.results.length && (
        <section className="flex flex-col gap-10 justify-between items-center h-full">
          <HeroesList
            heroes={data.results}
            page={page}
          />
          <Pagination total={data.count} />
        </section>
      )}
    </Page>
  );
};

export default HeroesListPage;
