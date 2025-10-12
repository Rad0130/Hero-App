import { useEffect, useState } from 'react';
import StoredApp from '../StoredApp/StoredApp';
import { useLoaderData} from 'react-router';
import { toast, ToastContainer} from 'react-toastify';
import { getStoredApps } from '../../Utils/addToLocal';
import { IoCloudDoneOutline } from "react-icons/io5";

const Installation = () => {
    const apps= useLoaderData();
    const [storedAppsID,setStoredAppsID]=useState([]);
    const [storedApps,setStoredApps]=useState([]);
    useEffect(()=>{
        const storedApplications=getStoredApps();
        setStoredAppsID(storedApplications);
    },[])

    useEffect(()=>{
        const filteredApps=apps.filter(app=>storedAppsID.includes(app.id));
        setStoredApps(filteredApps)
    },[apps,storedAppsID])

    const handleUninstall=(id,title)=>{
        const remainingId=storedAppsID.filter(appId=>appId!==id);
        setStoredAppsID(remainingId);
        localStorage.setItem('installedApps',JSON.stringify(remainingId));
        toast(<div className='flex items-center gap-2'><span className='text-green-500'><IoCloudDoneOutline/></span>Uninstalled <span className='text-red-500'>{title}</span>!!</div>)

    }

    const handleDsc=()=>{
        const descending=[...storedApps].sort((a,b)=>b.downloads-a.downloads);
        setStoredApps(descending)
    }

    const handleAsc=()=>{
        const descending=[...storedApps].sort((a,b)=>a.downloads-b.downloads);
        setStoredApps(descending)
    }
    
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='py-20 px-4 md:px-50'>
                <div className='text-center space-y-3 mb-10'>
                    <h1 className='font-bold text-4xl'>Your Installed Apps</h1>
                    <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <h1 className='font-bold text-2xl'>{storedApps.length} Apps Found</h1>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size  ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><button onClick={handleDsc}>High-Low</button></li>
                            <li><button onClick={handleAsc}>Low-High</button></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-4'>
                    {
                        storedApps.map(installedApp=><StoredApp key={installedApp.id} installedApp={installedApp} storedAppsID={storedAppsID} setStoredAppsID={setStoredAppsID} handleUninstall={handleUninstall} ></StoredApp>)
                    }
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Installation;