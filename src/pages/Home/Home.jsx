import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import AllApps from '../../components/AllApps/AllApps';

const Home = () => {
    const allApps=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AllApps allApps={allApps}></AllApps>
        </div>
    );
};

export default Home;