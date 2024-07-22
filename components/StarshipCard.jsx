import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { numberFormat } from '@utils/numberFormat';

// Starship description card

const StarshipCard = ({ starship }) => {
  // As prop getting starship object

  const {
    name,
    model,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    starship_class,
  } = starship;

  // Destructure object for information we need and return styled card

  // Functions numberFormat and capitalizeFirstLetter having decorative purposes

  return (
    <div className="w-80 h-[400px] p-5 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-800 via-purple-700 to-gray-800 text-white m-4 border-solid border-2 border-yellow-500 hover:scale-110 transition-all ">
      <div className="flex flex-col size-full justify-between ">
        <ul className="flex flex-col size-full justify-center gap-1 text-nowrap bg-slate-400 bg-opacity-50 p-5 rounded-xl text-sm">
          <li className="flex justify-between  gap-1 py-2 ">
            <h3 className="font-semibold  ">Name:</h3>
            <p>{name}</p>
          </li>
          {model !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <h3 className="font-semibold text-wrap text-left ">Model:</h3>
              <p className="text-wrap text-right">{model}</p>
            </li>
          )}
          {cost_in_credits !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <h3 className="font-semibold text-wrap text-left">Cost:</h3>
              <p className="text-wrap text-right">
                {numberFormat(Number(cost_in_credits)) || ''} credits
              </p>
            </li>
          )}
          {length !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <h3 className="font-semibold text-wrap text-left">Length:</h3>
              <p className="text-wrap text-right">{length || '0'} m</p>
            </li>
          )}
          {max_atmosphering_speed !== 'unknown' &&
            max_atmosphering_speed !== 'n/a' && (
              <li className="flex justify-between gap-1 py-2 ">
                <h3 className="font-semibold text-wrap text-left">
                  Max. atmospheric speed:
                </h3>
                <p className="text-right">
                  {numberFormat(Number(max_atmosphering_speed)) || '0'} km/h
                </p>
              </li>
            )}
          {starship_class !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <h3 className="font-semibold text-wrap text-left">Class:</h3>
              <p className="text-wrap text-right">
                {capitalizeFirstLetter(starship_class)}
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default StarshipCard;
