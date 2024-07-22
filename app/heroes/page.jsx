import HeroesList from '@components/HeroesList';
import Page from '@components/Page';
import Pagination from '@components/Pagination';
import SearchBar from '@components/SearchBar';
import { fetchHeroes } from '@utils/starWarsAPI';

// Server side generated component with GET request for fetching heroes by searchParams

const HeroesPage = async ({ searchParams }) => {
  const { page, name } = searchParams;
  const data = await fetchHeroes(page, name);
  // List and Pagination are rendered only in case of any results received, otherwise - info message.
  return (
    <Page>
      <SearchBar />
      {data.results && data.results.length ? (
        <section className="flex flex-col gap-10 justify-between items-center h-full">
          <HeroesList
            heroes={data.results}
            page={page}
          />
          <Pagination total={data.count} />
        </section>
      ) : (
        <p className=" text-3xl text-center mt-[200px] px-4">
          Unfortunately no results by your request - please write full name of
          the character.
        </p>
      )}
    </Page>
  );
};

export default HeroesPage;
