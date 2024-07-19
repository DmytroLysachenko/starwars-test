import Page from '@components/Page';
import Link from 'next/link';

const HeroStartPage = () => {
  return (
    <Page>
      <div className="flex justify-center items-center h-full">
        <Link
          href={'/heroes/1'}
          className="block w-40 text-center text-white p-5 bg-gray-600 m-auto rounded-xl"
        >
          Lets start!
        </Link>
      </div>
    </Page>
  );
};

export default HeroStartPage;
