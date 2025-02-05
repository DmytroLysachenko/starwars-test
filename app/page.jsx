import Page from '@components/Page';
import Link from 'next/link';

// Home page with description of web-application and navigational link to '/heroes' page

const Home = () => {
  return (
    <Page
      className={
        'bg-hero-pattern overflow-y-auto bg-cover bg-center flex justify-center items-center'
      }
    >
      <section>
        <div className="w-[300px] md:w-[700px] h-full  text-center text-[#feda4a] ">
          <h1 className="mb-16 text-5xl font-bold">
            Discover Your Star Wars Hero
          </h1>
          <p className="mb-10">
            Welcome to the ultimate Star Wars hero database, where your journey
            into the galaxy begins! Dive deep into the Star Wars universe and
            uncover all the fascinating details about your favorite characters.
            From legendary Jedi to iconic Sith, brave rebels to fearless bounty
            hunters, find everything you need to know in one place.
          </p>
          <ul className="flex flex-col gap-4 mb-16">
            <li>
              <span className=" font-semibold">
                Explore Comprehensive Profiles:
              </span>
              <p>
                Detailed biographies, character backgrounds, and key moments.
              </p>
            </li>
            <li>
              <span className=" font-semibold">Stay Updated:</span>{' '}
              <p>
                Latest news, appearances, and trivia about your beloved heroes.
              </p>
            </li>
          </ul>
          <Link
            href={'/heroes'}
            className="block w-[200px] md:w-[200px] mx-auto p-3 md:p-5 md:text-xl rounded-xl bg-blue-800 bg-opacity-70 font-bold hover:scale-110 transition-all "
          >
            Get Started
          </Link>
        </div>
      </section>
    </Page>
  );
};

export default Home;
