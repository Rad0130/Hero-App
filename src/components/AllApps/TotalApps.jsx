import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';
import { Suspense } from 'react';
import NoApps from './NoApps';

const TotalApps = () => {
    const totalApps=useLoaderData();
    const [searchText,setSearchText]=useState('');

    const filteredApps=totalApps.filter(app=>app.title.toLowerCase().includes(searchText.toLowerCase()));
    return (
        <div className='bg-[#F5F5F5]'>
                    <div className='p-4 md:p-20'>
                        <h1 className='font-bold text-5xl mb-4 text-center'>Our All Applications</h1>
                        <p className='text-[#627382] mb-8 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                        <div className='flex justify-between items-center'>
                                <div><h1 className='font-semibold text-2xl'>{filteredApps.length>1?(`(${filteredApps.length}) Apps Found`):(`(${filteredApps.length}) App Found`)}</h1></div>
                                <div>
                                    <label className="input">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                            >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                            </g>
                                        </svg>
                                        <input type="search" value={searchText} onChange={(e)=> setSearchText(e.target.value)} required placeholder="search Apps" />
                                    </label>
                                </div>
                            </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch'>
                            <Suspense fallback={<div className='font-bold text-9xl'>Loading....</div>}>
                                {
                                    filteredApps.length>0?(
                                    filteredApps.map(app=><SingleApp key={app.id} app={app}></SingleApp>)):(<div className='w-[105rem]'><NoApps></NoApps></div>)
                                }
                            </Suspense>
                        </div>
                    </div>
                </div>
    );
};

export default TotalApps;