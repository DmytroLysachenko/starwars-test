'use client';

import { useEffect, useState } from 'react';
import { useMedia } from '@hooks/useMedia';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import CardWrapper from './CardWrapper';

// Description cards slider with props of title and array of objects to be rendered (films / starships)
// Component Client side for using hooks

const DescriptionCardsSlider = ({ title, array }) => {
  // useState hook for currentPage, which determine index of 2nd object in array

  // In case of desktop display - 3 cards displayed at once, tablet - 2 cards, mobile - 1 card

  const [currentPage, setCurrentPage] = useState(0);

  // useState hook for isClient for avoiding reHydration warnings

  const [isClient, setIsClient] = useState(false);
  const { isTablet, isDesktop } = useMedia();

  // Media queries determination done with the help of 'react-responsive' library and custom hook useMedia()

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center">{title} information:</h2>
        <div className="flex relative ">
          {array[currentPage - 1] && (
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {array[currentPage] && (
              <CardWrapper
                type={title}
                keyObject={array[currentPage]}
              />
            )}
            {array[currentPage + 1] && isTablet && (
              <CardWrapper
                type={title}
                keyObject={array[currentPage + 1]}
              />
            )}
            {array[currentPage + 2] && isDesktop && (
              <CardWrapper
                type={title}
                keyObject={array[currentPage + 2]}
              />
            )}
          </div>
          {array[currentPage + 1] &&
            (!isTablet || array[currentPage + 2]) &&
            (!isDesktop || array[currentPage + 3]) && (
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
      </div>
    )
  );
};

export default DescriptionCardsSlider;
