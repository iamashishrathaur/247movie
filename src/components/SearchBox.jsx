import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBox = () => {
  return (
<div className='search-field max-w-md m-auto mt-4 bg-black me-4 lg:me-0'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer ml-1 h-full w-full outline-none text-sm text-white pr-2 bg-black"
        type="search"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>

  )
}

export default SearchBox