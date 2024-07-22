'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBar = () => {
  const [name, setName] = useState('');

  // name state changing on input value change

  const router = useRouter();

  const updateSearchParams = (name) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (name.trim()) {
      searchParams.set('name', name);
      searchParams.set('page', '1');
      setName('');
    } else {
      searchParams.delete('name');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  // updateSearchParams updating search parameter 'name' with value from state then setting state value to empty string

  const handleSearch = (event) => {
    event.preventDefault();
    updateSearchParams(name);
  };

  // handle search function for submit of form

  return (
    <form
      className="relative w-60 md:w-80 mx-auto"
      onSubmit={(event) => handleSearch(event)}
    >
      <SearchInput
        name={name}
        setName={setName}
      />
      <SearchButton />
    </form>
  );
};

export default SearchBar;
