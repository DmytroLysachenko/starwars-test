'use client';

import { useState } from 'react';
import StarshipCard from './StarshipCard';
import { useMedia } from '@hooks/useMedia';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ShipsDescription = ({ starships }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isTablet, isDesktop } = useMedia();

  return (
    <div className="flex relative ">
      {starships[currentPage - 2] && (
        <button
          type="button"
          className="absolute -left-4 top-1/2  hover:scale-125  transition-all"
          onClick={() => {
            setCurrentPage((prevValue) => prevValue - 1);
          }}
        >
          <FaArrowLeft
            width={50}
            height={50}
          />
        </button>
      )}
      {starships[currentPage - 1] && !isTablet && (
        <button
          type="button"
          className="absolute -left-4 top-1/2  hover:scale-125 transition-all"
          onClick={() => {
            setCurrentPage((prevValue) => prevValue - 1);
          }}
        >
          <FaArrowLeft
            width={50}
            height={50}
          />
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {starships[currentPage - 1] && isTablet && (
          <StarshipCard starship={starships[currentPage - 1]} />
        )}
        <StarshipCard starship={starships[currentPage]} />
        {starships[currentPage + 1] && isDesktop && (
          <StarshipCard starship={starships[currentPage + 1]} />
        )}
      </div>
      {starships[currentPage + 1] && (
        <button
          type="button"
          className="absolute -right-4 top-1/2  hover:scale-125 transition-all "
          onClick={() => {
            setCurrentPage((prevValue) => prevValue + 1);
          }}
        >
          <FaArrowRight
            width={50}
            height={50}
          />
        </button>
      )}
    </div>
  );
};

export default ShipsDescription;
