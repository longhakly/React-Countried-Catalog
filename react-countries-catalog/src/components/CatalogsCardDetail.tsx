import React from 'react';
import KhFlag from '../assets/kh.png';
import { useEffect, useState } from 'react';
const CatalogsCardDetail: React.FC<{ countryDetail: any }> = ({ countryDetail }) => {
  console.log("country detail", countryDetail);
  const [native_name, setNativeName] = useState("");
  useEffect(() => {
    if(countryDetail){
        const firstNativeNameKey = Object.keys(countryDetail[0].name.nativeName)[0];
        // Handle native common name undefined
        if (countryDetail[0].name.nativeName[firstNativeNameKey] && countryDetail[0].name.nativeName[firstNativeNameKey].common) {
        setNativeName(countryDetail[0].name.nativeName[firstNativeNameKey].common);
        } else {
        // If no Native common name then give as offical name
        setNativeName(countryDetail[0].name.official);
    }
    }

  }, [countryDetail]);
  return (
    <div className='w-full h-full rounded-[10px] bg-white'>
      {countryDetail.length !== 0 ? (
        <div>
          <img src={countryDetail[0].flags.png} alt="KhFlag" className='rounded-tl-[10px] rounded-tr-[10px] w-full h-[350px]' />
          <div className='block mx-4 py-4 text-[16px]'>
            <h1 className='text-[20px]'>{countryDetail[0].name.official}</h1>
            <div className='flex justify-start space-x-2 text-[#686666]'>
              <h3>{native_name}</h3>
              <span>|</span>
              <h3>{countryDetail[0].altSpellings[0]}</h3>
            </div>
            <div className='flex justify-start items-center my-1'>
              <div className={
                    countryDetail[0].independent !== true? (
                        'bg-red-500 px-3 py-0.5 rounded-[10px]')
                        :'bg-green-500 px-3 py-0.5 rounded-[10px]'
                }>
                <p className='text-white font-bold'>Independent</p>
              </div>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
              <h3>Region :</h3>
              <p className='text-[#686666]'>{countryDetail[0].region}, {countryDetail[0].subregion}</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
              <h3>Capital :</h3>
              <p className='text-[#686666]'>{countryDetail[0].capital}</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Languages :</h3>
                {Object.values(countryDetail[0].languages).map((language: any, index: number) => (
                    <p className='text-[#686666]' key={index}>{language}</p>
                ))}
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Currencies :</h3>
                {Object.values(countryDetail[0].currencies).map((currency: any, index: number) => (
                <div className='bg-yellow-500 px-3 py-0.5 rounded-[10px]' key={index}>
                    <p className='text-white text-[14px]'>{currency.name} ({currency.symbol})</p>
                </div>
                ))}
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
              <h3>Code :</h3>
              <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                <p className='text-white text-[14px]'>{countryDetail[0].idd.root + countryDetail[0].idd.suffixes[0]}</p>
              </div>
              <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                <p className='text-white text-[14px]'>{countryDetail[0].cca2}</p>
              </div>
              <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                <p className='text-white text-[14px]'>{countryDetail[0].cca3}</p>
              </div>
              <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                <p className='text-white text-[14px]'>{countryDetail[0].ccn3}</p>
              </div>
              <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                <p className='text-white text-[14px]'>{countryDetail[0].cioc}</p>
              </div>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
              <h3>Area :</h3>
              <p className='text-[#686666]'>{countryDetail[0].area} km²</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
              <h3>Population :</h3>
              <p className='text-[#686666]'>{countryDetail[0].population} citizen</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
              <h3>Timezone :</h3>
              <p className='text-[#686666]'>{countryDetail[0].timezones[0]}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CatalogsCardDetail;
