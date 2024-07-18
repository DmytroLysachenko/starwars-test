import Feed from '@components/Feed';

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-8 text-5xl font-bold">
              Discover Your Star Wars Hero
            </h1>
            <p className="mb-10">
              Welcome to the ultimate Star Wars hero database, where your
              journey into the galaxy begins! Dive deep into the Star Wars
              universe and uncover all the fascinating details about your
              favorite characters. From legendary Jedi to iconic Sith, brave
              rebels to fearless bounty hunters, find everything you need to
              know in one place.
            </p>
            <ul className="text-left flex flex-col gap-2 mb-10">
              <li>
                <strong>Explore Comprehensive Profiles:</strong> Detailed
                biographies, character backgrounds, and key moments.
              </li>
              <li>
                <strong>Stay Updated:</strong> Latest news, appearances, and
                trivia about your beloved heroes.
              </li>
              <li>
                <strong>Connect and Share:</strong> Join the fan community,
                share your insights, and celebrate your favorite characters
                together.
              </li>
            </ul>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Feed />
    </>
  );
};

export default Home;
