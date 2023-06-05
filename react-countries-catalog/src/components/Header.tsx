import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.jpg';
import { getSearchCountriesAPI } from '../axios/getSearchCountries';

interface HeaderProps {
  onSearchResults: (results: any) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchResults }) => {
  
    // Handle input update from search bar
    const [searchInput, setSearchInput] = useState('');
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle no searchInput
    if(searchInput===''){
        return false;
    }
    // Fetch Data by Search
    try {
        const response = await getSearchCountriesAPI(searchInput);
        if (response && response.status === 200) {
          onSearchResults(response.data); 
          setSearchInput('');
        } else {
          console.log('Error fetching data');
        }
      } catch (error) {
        console.log('Error fetching data', error);
      }
  };

  return (
    <div className='flex w-full h-[100px]'>
      {/* Left Header */}
      <div className='pl-4 2xl:w-[35%] lg:w-[30%] md:w-[25%] sm:w-[20%] xs:w-[15%]'>
        <img src={Logo} className='w-[80px]' />
      </div>
      {/* Middle Header */}
      <div className=' block 2xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[60%] xs:w-[70%]'>
        {/* Search Bar */}
        <form onSubmit={handleSubmit}>
          <div className='w-full h-[45px] mt-10 flex items-center justify-center border border-gray-300 rounded-[10px] shadow-md'>
            <input
              type='text'
              placeholder='Search Country'
              className='w-[90%] rounded-lg py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-[15px]'
              value={searchInput}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className=' rounded-lg py-2 px-4 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 2xl:w-[10%] lg:w-[10%] md:w-[10%] sm: w-[10%] xs:w-[20%]'
            >
              <SearchIcon className='w-[24px] h-[24px]'/>
            </button>
          </div>
        </form>
      </div>
      {/* Right Header */}
      <div className='2xl:w-[35%] lg:w-[30%] md:w-[25%] sm:w-[20%] xs:w-[15%]'></div>
    </div>
  );
};

export default Header;
