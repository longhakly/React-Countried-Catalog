import React, { useState, useEffect } from 'react';
import CatalogsCard from './CatalogsCard';
import CatalogsCardDetail from './CatalogsCardDetail';
import { getAllCountriesAPI } from '../axios/getAllCountries';
import { getCountryDetailAPI } from '../axios/getCountryDetail';

interface ListCatalogsProps {
  searchResults: any[];
}

interface Country {
  name: {
    official: string;
  };
}

const ListCatalogs: React.FC<ListCatalogsProps> = ({ searchResults }) => {

  // Assign to state for purpose update state recall all countris data in handleSortAll
  const [searchResultsAdjust, setSearchResultsAdjust] = useState(searchResults);
  useEffect(() => {
    setSearchResultsAdjust(searchResults);
  }, [searchResults]);

  // Pop Up and fetch all country detail data
  const [isOpen, setIsOpen] = useState(false);
  const [countryDetail, setCountryDetail] = useState("");
  const togglePopup = async (officialName: string) => {
    if(officialName != "None"){
      try {
        const response = await getCountryDetailAPI(officialName);
        if (response && response.status === 200) {
          setCountryDetail(response.data);
          setIsOpen(!isOpen);
        } else {
          console.log('Error fetching data');
        }
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }
    setIsOpen(!isOpen);

  };

  // CatalogsCard Fetch Data
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (searchResultsAdjust.length > 0) {
        setAllCountries(searchResultsAdjust);
        handlePageChange(1);
        setSortOrder(null);
      } else {
        try {
          const response = await getAllCountriesAPI();
          if (response && response.status === 200) {
            setAllCountries(response.data);
          } else {
            console.log('Error fetching data');
          }
        } catch (error) {
          console.log('Error fetching data', error);
        }
      }
    };

    fetchData();
  }, [searchResultsAdjust]);

  // Sort country official name to default
  const [sortOrder, setSortOrder] = useState<'all' | 'asc' | 'desc' | null>(null);
  const handleSortAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchResultsAdjust([]);
    setSortOrder('all');
  };
  // Sort country official name ASC
  const handleSortAsc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const sortedDataAsc = [...allCountries].sort((a: Country, b: Country) =>
      a.name.official.localeCompare(b.name.official)
    );
    setAllCountries(sortedDataAsc);
    setSortOrder('asc');
  };

  // Sort country official name DESC
  const handleSortDesc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const sortedDataDesc = [...allCountries].sort((a: Country, b: Country) =>
      b.name.official.localeCompare(a.name.official)
    );
    setAllCountries(sortedDataDesc);
    setSortOrder('desc');
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedCountries = allCountries.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  

  return (
    <div className='block w-ful mx-[10%] mt-[50px]'>
      {/* Title */}
      <h1 className='text-[20px] font-[500]'>Countries Catalog</h1>
      {/* Filter All, Asc, Desc */}
      <div className='flex items-center justify-start space-x-2 mt-2'>
      <button
          id='all'
          className={`${
            sortOrder === 'all' ? 'bg-green-500 text-white' : 'text-[#8E8E8E]'
          } hover:text-white hover:bg-green-500 px-2 rounded-[10px] `}
          onClick={handleSortAll}
        >
          All
        </button>
        <p>|</p>
        <button
          id='asc'
          className={`${
            sortOrder === 'asc' ? 'bg-green-500 text-white' : 'text-[#8E8E8E]'
          } hover:text-white hover:bg-green-500 px-2 rounded-[10px] `}
          onClick={handleSortAsc}
        >
          A-Z
        </button>
        <p>|</p>
        <button
          id='desc'
          className={`${
            sortOrder === 'desc' ? 'bg-green-500 text-white' : 'text-[#8E8E8E]'
          } hover:text-white hover:bg-green-500 px-2 rounded-[10px] `}
          onClick={handleSortDesc}
        >
          Z-A
        </button>
      </div>
      {/* Popup Catalog Detail*/}
      {isOpen && (
        <div className='absolute z-10 inset-0 flex items-center justify-center'>
          <div
            className='absolute z-0 w-full h-full flex justify-center items-center bg-gray-500 opacity-50'
            onClick={()=>togglePopup("None")}
          ></div>
          <div className='absolute z-20 2xl:w-[700px] lg:w-[700px] md:w-[500px] sm:w-[450px] xs:w-[450px]'>
            <CatalogsCardDetail countryDetail={countryDetail}/>
          </div>
        </div>
      )}
      {/* Map List of CatalogsCard from fetch data*/}
      <div className='w-full h-[550px] flex flex-wrap justify-left overflow-x-auto mt-4 overflow-y-scroll'>
        {displayedCountries.map((country, index) => (
          <div className='2xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] xs:w-[100%]' onClick={()=>togglePopup(country.name.official)} key={index}>
            <CatalogsCard country={country} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className='flex mt-4 2xl:justify-end md:justify-end sm:justify-end xs:justify-center'>
        <ul className='flex items-center space-x-2 xs:space-x-1'>
          {Array.from({ length: Math.ceil(allCountries.length / itemsPerPage) }).map((_, index) => (
            <li key={index}>
              <a
                href='#'
                className={`px-3 py-2 rounded-md ${
                  currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </div>
  );
};

export default ListCatalogs;
