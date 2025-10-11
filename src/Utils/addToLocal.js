import { toast } from "react-toastify";

const getStoredApps=()=>{
    const storedApps=localStorage.getItem('installedApps');
    if (storedApps){
        const storedAppsData=JSON.parse(storedApps);
        return storedAppsData;
    }
    else{
        return [];
    }
}


const addToStoredApps=(id)=>{
    const storedAppsData=getStoredApps();
    if(storedAppsData.includes(parseInt(id))){
        toast('App Already Installed!')
    }
    else{
        storedAppsData.push(parseInt(id));
        const data=JSON.stringify(storedAppsData)
        localStorage.setItem('installedApps',data);
    }
}

export {addToStoredApps,getStoredApps};