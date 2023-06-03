import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.jpg';
const Header = () => {
  return (
    <div className='flex w-full h-[100px]'>
        {/* Left Header */}
        <div className='w-[35%] pl-4'>
            <img 
                src={Logo}
                className='w-[80px] h-[80px]'
            />
        </div>
        {/* Middle Header */}
        <div className='w-[30%] block'>
            {/* Search Bar */}
            <div className="w-full h-[45px] mt-10 flex items-center justify-center  border border-gray-300 rounded-[10px] shadow-md ">
                <input
                    type="text"
                    placeholder="Search Crountry"
                    className="w-[90%] rounded-lg py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-[15px]"
                />
                <button className="w-[10%] rounded-lg py-2 px-4 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                    <SearchIcon/>
                </button>
            </div>
            {/* Filter Asc, Desc */}
            <div className='flex items-center justify-end space-x-2 mt-2'>
                <button className='text-[#8E8E8E] hover:text-black'>Asc</button>
                <p>|</p>
                <button className='text-[#8E8E8E] hover:text-black'>Desc</button>
            </div>
        </div>
        {/* Right Header */}
        <div className='w-[35%]'></div>
    </div>
  );
};

export default Header;
