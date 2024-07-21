import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import Link from 'next/link';

const HeroCard = ({ hero, page }) => {
  return (
    <div className="w-80 h-[400px] p-5 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-800 via-purple-700 to-gray-800 m-4 border-solid border-2 border-yellow-500 hover:scale-110 transition-all">
      <div className="flex flex-col size-full justify-between ">
        <ul className="flex flex-col justify-center gap-1 text-nowrap bg-slate-400 bg-opacity-50 p-5 rounded-xl">
          <li className="flex justify-between  gap-1 py-2 ">
            <span className="font-semibold ">Name:</span>
            <span className=" ">{hero.name}</span>
          </li>
          {hero.gender !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <span className="font-semibold ">Gender:</span>
              <span className=" ">{capitalizeFirstLetter(hero.gender)}</span>
            </li>
          )}
          {hero.height !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <p className="font-semibold ">Height:</p>
              <p className=" ">{hero.height} cm</p>
            </li>
          )}
          {hero.mass !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <p className="font-semibold ">Mass:</p>
              <p className=" ">{hero.mass} kg</p>
            </li>
          )}
          {hero.birth_year !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <p className="font-semibold ">Birth Year:</p>
              <p className=" ">{hero.birth_year}</p>
            </li>
          )}
        </ul>

        <div className="self-center">
          <Link
            href={`/heroes/${hero.id}`}
            className="block w-40 rounded bg-sky-600 py-2 px-4 text-center text-sm  data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
          >
            Check out details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
