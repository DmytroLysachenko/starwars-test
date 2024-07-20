'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBar = () => {
  const [name, setName] = useState('');

  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    updateSearchParams(name);
  };

  const updateSearchParams = (name) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (name.trim()) {
      searchParams.set('name', name);
      searchParams.set('page', '1');
    } else {
      searchParams.delete('name');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      className="relative w-60 md:w-80 mx-auto"
      onSubmit={(event) => handleSearch(event)}
    >
      <SearchInput setName={setName} />
      <SearchButton />
    </form>
  );
};

export default SearchBar;
