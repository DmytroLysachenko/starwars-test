import Feed from '@components/Feed';
import Link from 'next/link';

const Home = () => {
  return (
    <div
      className="hero h-mobPageHeight md:h-tabPageHeight overflow-y-auto bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      }}
    >
      <div className="max-w-md text-center text-yellow-200 ">
        <h1 className="mb-8 text-5xl font-bold">
          Discover Your Star Wars Hero
        </h1>
        <p className="mb-10">
          Welcome to the ultimate Star Wars hero database, where your journey
          into the galaxy begins! Dive deep into the Star Wars universe and
          uncover all the fascinating details about your favorite characters.
          From legendary Jedi to iconic Sith, brave rebels to fearless bounty
          hunters, find everything you need to know in one place.
        </p>
        <ul className="flex flex-col gap-4 mb-10">
          <li>
            <strong>Explore Comprehensive Profiles:</strong>{' '}
            <p>Detailed biographies, character backgrounds, and key moments.</p>
          </li>
          <li>
            <strong>Stay Updated:</strong>{' '}
            <p>
              Latest news, appearances, and trivia about your beloved heroes.
            </p>
          </li>
          <li>
            <strong>Connect and Share:</strong>{' '}
            <p>
              Join the fan community, share your insights, and celebrate your
              favorite characters together.
            </p>
          </li>
        </ul>
        <Link
          href={'/heroes'}
          className="p-3 rounded-md bg-slate-600 text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
