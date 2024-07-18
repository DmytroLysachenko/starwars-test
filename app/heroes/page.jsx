import HeroesList from '@components/HeroesList';
import Pagination from '@components/NextPageBtn';
import NextPageBtn from '@components/NextPageBtn';
import starWarsAPI, { fetchHeroes } from '@utils/starWarsAPI';

const Heroes = async () => {
  const data = await fetchHeroes();
  const { count: total, next: nextPage, previous: previousPage } = data;

  return (
    <div className="h-mobPageHeight md:h-tabPageHeight overflow-y-auto">
      <HeroesList heroes={heroes} />
      <Pagination nextPage={nextPage} />
    </div>
  );
};

export default Heroes;
