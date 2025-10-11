import React from 'react';
import StoredApp from '../StoredApp/StoredApp';
import { useLoaderData } from 'react-router';

const Installation = () => {
    const apps= useLoaderData();
    const storedAppsID=JSON.parse(localStorage.getItem('installedApps')) || [];
    const storedApps=apps.filter(app=>storedAppsID.includes(app.id));
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='p-20'>
                <div className='text-center space-y-3 mb-10'>
                    <h1 className='font-bold text-4xl'>Your Installed Apps</h1>
                    <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <h1 className='font-bold text-2xl'>{storedApps.length} Apps Found</h1>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size  ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>High-Low</a></li>
                            <li><a>Low-High</a></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-4'>
                    {
                        storedApps.map(installedApp=><StoredApp key={installedApp.id} installedApp={installedApp}></StoredApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;