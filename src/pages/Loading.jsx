import React from 'react';
import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='flex justify-center items-center gap-2 p-0 md:p-100'>
                <img className='w-15 h-15 animate-spin' src={logo} alt="" />
                <h1 className='font-bold text-5xl'>Loading Page...</h1>
            </div>
        </div>
    );
};

export default Loading;