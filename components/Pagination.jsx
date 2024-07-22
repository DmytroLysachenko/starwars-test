'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

// Pagination component for HeroesPage

const Pagination = ({ total }) => {
  // As props getting total quantity of results

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // pathname and searchParams to create function for changing visible page of results

  const currentPage = Number(searchParams.get('page')) || 1;
  const { replace } = useRouter();
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  // createPageURL getting as parameter page number and setting searchParam 'page' to that page

  return (
    <div className="flex justify-center gap-1 relative bottom-3 ">
      {currentPage > 1 && (
        <button
          data-testid={`Pagination prev`}
          onClick={() => {
            createPageURL(currentPage - 1);
          }}
          className="flex size-8 items-center justify-center rounded-full border  bg-slate-500 bg-opacity-40   absolute -left-12 top-1"
        >
          <MdOutlineKeyboardArrowLeft
            color="white"
            className="size-5"
          />
        </button>
      )}

      <div className="flex justify-center items-center size-full bg-slate-500 bg-opacity-40 px-4 py-2 md:px-6 md:py-3 rounded-lg">
        {currentPage}
      </div>

      {currentPage < total / 10 && (
        <button
          data-testid={`Pagination next`}
          onClick={() => {
            createPageURL(currentPage + 1);
          }}
          className="inline-flex size-8  items-center justify-center rounded-full border  bg-slate-500 bg-opacity-40   absolute -right-12 top-1"
        >
          <MdOutlineKeyboardArrowRight
            color="white"
            className="size-5"
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
