import React from 'react';
import noApp from '../../assets/App-Error.png';
import { Link } from 'react-router';

const NoApps = () => {
    return (
            <div className='bg-[#F5F5F5]'>
                <div className='text-center p-30 space-y-10'>
                    <div className='flex justify-center'>
                        <img src={noApp} alt="" />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-5xl'>OOPS!! APP NOT FOUND</h1>
                        <p>The App you are requesting is not found on our system.  please try another apps</p>
                    </div>
                </div>
            </div>
    );
};

export default NoApps;