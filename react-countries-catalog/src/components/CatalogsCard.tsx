import React, { useState, useEffect } from 'react';

const CatalogsCard: React.FC<{ country: any }> = ({ country }) => {
  const [native_name, setNativeName] = useState("");
  useEffect(() => {
    const firstNativeNameKey = Object.keys(country.name.nativeName)[0];
    // Handle native common name undefined
    if (country.name.nativeName[firstNativeNameKey] && country.name.nativeName[firstNativeNameKey].common) {
      setNativeName(country.name.nativeName[firstNativeNameKey].common);
    } else {
      // If no Native common name then give as offical name
      setNativeName(country.name.official);
    }
  }, [country]);

    return (
    <div className='w-full mb-4 px-2'>
      <div className='relative block w-full h-[260px] rounded-[10px] shadow-lg cursor-pointer'>
        <img src={country.flags.png} alt="KhFlag" className='rounded-tl-[10px] rounded-tr-[10px] w-full h-[150px] border-[1px] border-gray-200'/>
        <div className=' block mx-4 py-4'>
            <h1 className='text-[13px]'>{country.name.official}</h1>
            <div className='flex justify-start space-x-2 text-[#686666] text-[12px]'>
                <h3>{native_name}</h3>
                <span>|</span>
                <h3>{country.altSpellings[0]}</h3>
            </div>
            <div className='absolute bottom-0 z-0 mb-2 flex justify-start space-x-4 text-[12px] font-[300]'>
                <h3>CODE :</h3>
                <p>{country.idd.root + country.idd.suffixes[0]}</p>
                <p>{country.cca2}</p>
                <p>{country.cca3}</p>
            </div>
        </div>
      </div>
    </div>
    );
  };

export default CatalogsCard;
