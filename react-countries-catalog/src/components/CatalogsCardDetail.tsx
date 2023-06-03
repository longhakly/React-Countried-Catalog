import React from 'react';
import KhFlag from '../assets/kh.png'
const CatalogsCardDetail = () => {
    return (
    <div className='w-full h-full rounded-[10px] bg-white'>
      <img src={KhFlag} alt="KhFlag" className='rounded-tl-[10px] rounded-tr-[10px] w-full h-[350px]'/>
        <div className='block mx-4 py-4 text-[16px]'>
            <h1 className='text-[20px]'>Kinddom of Cambodia</h1>
            <div className='flex justify-start space-x-2 text-[#686666]'>
                <h3>Kampuchea</h3>
                <span>|</span>
                <h3>KH</h3>
            </div>
            <div className='flex justify-start items-center my-1'>
                <div className='bg-green-500 px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white font-bold'>Independent</p>
                </div>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Region :</h3>
                <p className='text-[#686666]'>Asia, South-EasternAsia</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Capital :</h3>
                <p className='text-[#686666]'>Phnom Penh</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Languages :</h3>
                <p className='text-[#686666]'>Khmer</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Currencies :</h3>
                <div className='bg-yellow-500 px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white text-[14px]'>Cambodian riel ($) </p>
                </div>
                <div className='bg-yellow-500 px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white text-[14px]'>United States dollar ($)</p>
                </div>

            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Code :</h3>
                <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white text-[14px]'>+855</p>
                </div>
                <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white text-[14px]'>KH</p>
                </div>
                <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white text-[14px]'>116</p>
                </div>
                <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white text-[14px]'>KHM</p>
                </div>
                <div className='bg-[#868686] px-3 py-0.5 rounded-[10px]'>
                    <p className='text-white text-[14px]'>CAM</p>
                </div>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Area :</h3>
                <p className='text-[#686666]'>181,035 km²</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Population :</h3>
                <p className='text-[#686666]'>16,718,971 citizen</p>
            </div>
            <div className='flex justify-start items-center my-1 space-x-4'>
                <h3>Timezone :</h3>
                <p className='text-[#686666]'>UTC+07:00</p>
            </div>
        </div>
    </div>
    );
  };

export default CatalogsCardDetail;
