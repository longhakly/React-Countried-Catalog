import React, { useState } from 'react';
import CatalogsCard from './CatalogsCard';
import CatalogsCardDetail from './CatalogsCardDetail';
const ListCatalogs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className='block w-ful mx-[10%] mt-[100px]'>
        {/* Title */}
        <h1 className='text-[20px] font-[500]'>Countries Catalog</h1> 
        {/* List of Catalog */}
        {isOpen && (
                <div className="absolute inset-0 flex items-center justify-center" >

                    <div className='absolute z-0 w-full h-full flex justify-center items-center bg-gray-500 opacity-50' onClick={togglePopup}>                   

                    </div>
                    <div className="absolute z-1 w-[700px] z">
                            <CatalogsCardDetail/>
                    </div>
                </div>
            )}
        <div className='w-full h-[510px] flex flex-wrap justify-left overflow-x-auto mt-4 overflow-y-scroll'>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>
            <div className='w-[20%]' onClick={togglePopup}>
                <CatalogsCard/>      
            </div>

            
        </div>
        <nav className="flex justify-end mt-4">
      <ul className="flex items-center">
        <li>
          <a
            href="#"
            className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 rounded-md bg-green-500 text-white hover:bg-blue-600"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default ListCatalogs;
