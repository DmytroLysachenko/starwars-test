import { FaSearch } from 'react-icons/fa';
const SearchButton = () => {
  return (
    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
      <button
        type="submit"
        className="text-gray-600 hover:text-gray-700"
      >
        <span className="sr-only">Search</span>

        <FaSearch
          className="w-4 h-4"
          color="white"
        />
      </button>
    </span>
  );
};

export default SearchButton;
