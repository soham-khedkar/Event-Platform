import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="relative  max-w-md">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
          placeholder="Explore !!"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
