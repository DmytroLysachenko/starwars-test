import { getLastValueFromHeader } from '@utils/getLastValueFromHeader';
import { headers } from 'next/headers';
import Link from 'next/link';

const HeroCard = ({ hero, page }) => {
  return (
    <>
      <div className="w-80 shadow-xl h-[400px] p-5 rounded-3xl flex border border-solid border-gray-100">
        <div className="flex flex-col w-full justify-between ">
          <ul className="grid grid-cols-1 gap-1 text-nowrap">
            <li className="flex flex-col gap-1 py-2 ">
              <p>Name:</p>
              <p>{hero.name}</p>
            </li>

            <li className="flex flex-col gap-1 py-2 ">
              <p className="font-medium text-gray-900">Gender:</p>
              <p className="text-gray-700 sm:col-span-2">
                {hero.gender !== 'unknown' ? hero.gender : ''}
              </p>
            </li>

            <li className="flex flex-col gap-1 py-2 ">
              <p className="font-medium text-gray-900">Height:</p>
              <p className="text-gray-700 sm:col-span-2">
                {hero.height !== 'unknown' ? hero.height + 'cm' : ''}
              </p>
            </li>

            {hero.mass !== 'unknown' && (
              <li className="flex flex-col gap-1 py-2 ">
                <p className="font-medium text-gray-900">Mass:</p>
                <p className="text-gray-700 sm:col-span-2">{hero.mass} kg</p>
              </li>
            )}

            <li className="flex flex-col gap-1 py-2 ">
              <p className="font-medium text-gray-900">Birth Year:</p>
              <p className="text-gray-700 sm:col-span-2">{hero.birth_year}</p>
            </li>
          </ul>

          <div className="self-center">
            <Link
              href={`/heroes/${page}/${hero.id}`}
              className="block w-40 rounded bg-sky-600 py-2 px-4 text-center text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
            >
              Check out details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
