'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
const Pagination = ({ total }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const { replace } = useRouter();
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="inline-flex justify-center gap-1 justify-self-end relative">
      {currentPage > 1 && (
        <button
          onClick={() => {
            createPageURL(currentPage - 1);
          }}
          className="flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900  absolute -left-10 top-0"
        >
          <MdOutlineKeyboardArrowLeft
            width={12}
            height={12}
          />
        </button>
      )}

      <div>
        <input
          type="number"
          className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          min="1"
          disabled
          value={currentPage}
          id="PaginationPage"
        />
      </div>

      {currentPage < total / 10 && (
        <button
          onClick={() => {
            console.log(currentPage);
            createPageURL(currentPage + 1);
          }}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900  absolute -right-10 top-0"
        >
          <MdOutlineKeyboardArrowRight
            width={12}
            height={12}
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
