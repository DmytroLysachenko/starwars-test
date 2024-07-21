'use client';

import React, { useEffect, useState } from 'react';
import StarshipCard from './StarshipCard';
import { useMedia } from '@hooks/useMedia';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ShipsDescription = ({ starships }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isTablet, isDesktop } = useMedia();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex relative ">
      {starships[currentPage - 2] && isLoaded && (
        <button
          type="button"
          className="absolute -left-7 top-1/2  hover:scale-110  transition-all bg-slate-500 bg-opacity-40 rounded-full p-1"
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
      {starships[currentPage - 1] && !isTablet && isLoaded && (
        <button
          type="button"
          className="absolute -left-7 top-1/2  hover:scale-125 transition-all bg-slate-500 bg-opacity-40 rounded-full p-1"
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
        {starships[currentPage] && (
          <StarshipCard starship={starships[currentPage]} />
        )}
        {starships[currentPage + 1] && isDesktop && (
          <StarshipCard starship={starships[currentPage + 1]} />
        )}
      </div>
      {starships[currentPage + 1] && isLoaded && (
        <button
          type="button"
          className="absolute -right-7 top-1/2  hover:scale-125 transition-all bg-slate-500 bg-opacity-40 rounded-full p-1 "
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
