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

  const [searchResultsAdjust, setSearchResultsAdjust] = useState(searchResults);
  // Pop Up
  const [isOpen, setIsOpen] = useState(false);
  const [countryDetail, setCountryDetail] = useState("");

  const togglePopup = async (officialName: string) => {
    setIsOpen(!isOpen);
    if(officialName != "None"){
      try {
        const response = await getCountryDetailAPI(officialName);
        if (response && response.status === 200) {
          setCountryDetail(response.data);
          console.log(response.data);
        } else {
          console.log('Error fetching data');
        }
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }

  };

  // CatalogsCard Fetch Data
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (searchResultsAdjust.length > 0) {
        setAllCountries(searchResultsAdjust);
        handlePageChange(1);
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

  useEffect(() => {
    setSearchResultsAdjust(searchResults);
  }, [searchResults]);

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
      {/* Filter Asc, Desc */}
      <div className='flex items-center justify-start space-x-2 mt-2'>
      <button
          id='all'
          className="text-[#8E8E8E] hover:text-white hover:bg-green-500 px-2 rounded-[10px]"
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
      {/* List of Catalog */}
      {isOpen && (
        <div className='absolute z-10 inset-0 flex items-center justify-center'>
          <div
            className='absolute z-0 w-full h-full flex justify-center items-center bg-gray-500 opacity-50'
            onClick={()=>togglePopup("None")}
          ></div>
          <div className='absolute z-20 w-[700px] z'>
            <CatalogsCardDetail countryDetail={countryDetail}/>
          </div>
        </div>
      )}
      {/* Map List of CatalogsCard from fetch data*/}
      <div className='w-full h-[550px] flex flex-wrap justify-left overflow-x-auto mt-4 overflow-y-scroll'>
        {displayedCountries.map((country, index) => (
          <div className='w-[20%]' onClick={()=>togglePopup(country.name.official)} key={index}>
            <CatalogsCard country={country} />
          </div>
        ))}
      </div>

      <nav className='flex justify-end mt-4'>
        <ul className='flex items-center space-x-2'>
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
