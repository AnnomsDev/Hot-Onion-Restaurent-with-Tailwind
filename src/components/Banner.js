import React from 'react';

const Banner = () => {
    return (
        <div className=' flex flex-col items-center justify-center bg-banner-img h-banner bg-cover bg-center bg-no-repeat'>
            <h2 className=' font-bold text-gray-900 text-3xl p-3'>Best food Waiting for your belly</h2>
            <div className='flex bg-white w-2xl rounded-full'>
                <input className=' w-auto pl-6 rounded-full' type="text" placeholder='Search food item' />
                <button className='bg-red-500 rounded-full py-2 px-5 text-white font-medium'>Search</button>
            </div>
        </div>
    );
};

export default Banner;