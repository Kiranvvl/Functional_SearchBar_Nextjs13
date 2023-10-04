import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function SearchCoins({ getSearchResults }) {
  const [query, setQuery] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/coins/search?query=${query}`);
    const coin = await response.json();
    getSearchResults(coin);
  };
  return (
    <div className=" my-20">
      <form onSubmit={handleSubmit} action="">
        <input
          className="text-gray-800 border-2 border-black rounded-full px-3 py-2"
          type="text"
          placeholder="SearchCoins...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-teal-500 text-white ml-3  rounded-full px-3 py-2 hover:bg-teal-600 cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
