import React from 'react';
import KhFlag from '../assets/kh.png'
const CatalogsCard = () => {
    return (
    <div className='w-full mb-4 px-2'>
      <div className='block w-full rounded-[10px] shadow-lg cursor-pointer'>
        <img src={KhFlag} alt="KhFlag" className='rounded-tl-[10px] rounded-tr-[10px] w-full h-[150px]'/>
        <div className='block mx-4 py-4'>
            <h1 className='text-[16px]'>Kinddom of Cambodia</h1>
            <div className='flex justify-start space-x-2 text-[#686666] text-[12px]'>
                <h3>Kampuchea</h3>
                <span>|</span>
                <h3>KH</h3>
            </div>
            <div className='flex justify-start space-x-4 text-[12px] font-[300]'>
                <h3>CODE :</h3>
                <p>+855</p>
                <p>KH</p>
                <p>KHM</p>
            </div>
        </div>
      </div>
    </div>
    );
  };

export default CatalogsCard;
