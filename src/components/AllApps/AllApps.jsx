import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const AllApps = ({allApps}) => {
    return (
        <div>
            <div className='p-4 md:p-20'>
                <h1 className='font-bold text-5xl mb-4 text-center'>Trending Apps</h1>
                <p className='text-[#627382] mb-8 text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch'>
                    <Suspense fallback={<div>Loading....</div>}>
                        {
                            allApps.map(app=><SingleApp key={app.id} app={app}></SingleApp>)
                        }
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AllApps;