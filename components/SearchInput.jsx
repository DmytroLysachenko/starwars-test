import React from 'react';

const SearchInput = ({ setName }) => {
  return (
    <>
      <label
        htmlFor="searchName"
        className="sr-only"
      >
        {' '}
        Search{' '}
      </label>

      <input
        type="text"
        id="searchName"
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="ex. Obi-Wan Kenobi"
        className="w-full px-4 md:px-6 rounded-lg border bg-transparent border-purple-700 bg-slate-300 py-2.5 md:py-4 pe-10 shadow-sm text-sm md:text-base"
      />
    </>
  );
};

export default SearchInput;
