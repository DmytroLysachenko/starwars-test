'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBar = () => {
  const [name, setName] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      cleanSearchParams();
      return;
    }
    updateSearchParams(name);
  };

  const cleanSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('name');
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const updateSearchParams = (name) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', '1');
    if (name) {
      searchParams.set('name', name);
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
      className="relative w-1/4 mx-auto"
      onSubmit={(event) => handleSearch(event)}
    >
      <SearchInput setName={setName} />
      <SearchButton />
    </form>
  );
};

export default SearchBar;
