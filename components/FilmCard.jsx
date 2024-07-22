// Film description card

const FilmCard = ({ film }) => {
  // As prop getting film object

  const { title, director, producer, opening_crawl } = film;

  // Destructure object for information we need and return styled card

  return (
    <div className="w-80 h-[400px] p-5 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-800 via-purple-700 to-gray-800 text-white m-4 border-solid border-2 border-yellow-500 hover:scale-110 transition-all">
      <div className="flex flex-col size-full justify-between ">
        <ul className="flex flex-col size-full  gap-1 text-wrap bg-slate-400 bg-opacity-50 p-5 rounded-xl text-sm overflow-y-auto scrollbar-hide">
          <li className="flex justify-between  gap-1 py-2 ">
            <h3 className="font-semibold  ">Title:</h3>
            <p>{title}</p>
          </li>

          <li className="flex justify-between gap-1 py-2 ">
            <h3 className="font-semibold text-wrap text-left ">Director:</h3>
            <p className="text-wrap text-right">{director}</p>
          </li>

          <li className="flex justify-between gap-1 py-2 ">
            <h3 className="font-semibold text-wrap text-left ">Producer:</h3>
            <p className="text-wrap text-right">{producer}</p>
          </li>

          {opening_crawl !== 'unknown' && (
            <li className="flex justify-between gap-1 py-2 ">
              <h3 className="font-semibold text-wrap text-left ">
                Opening Crawl:
              </h3>
              <p className="text-wrap  text-right">{opening_crawl}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilmCard;
