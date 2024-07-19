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
        placeholder="Name"
        className="w-full px-4 rounded-md border border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
      />
    </>
  );
};

export default SearchInput;
