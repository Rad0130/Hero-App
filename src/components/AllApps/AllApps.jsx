import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { Link } from 'react-router';

const AllApps = ({allApps}) => {
    return (
        <div>
            <div className='p-4 md:p-20'>
                <h1 className='font-bold text-5xl mb-4 text-center'>Trending Apps</h1>
                <p className='text-[#627382] mb-8 text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch'>
                    <Suspense fallback={<div>Loading....</div>}>
                        {
                            allApps.slice(0,8).map(app=><SingleApp key={app.id} app={app}></SingleApp>)
                        }
                    </Suspense>
                </div>
                <Link to='/Apps'>
                    <div className='flex justify-center'>
                        <button className='btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-1 text-white mt-8'>Show All</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AllApps;