import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id}=useParams();
    const appDetails=useLoaderData();
    const singleApp=appDetails.find(app=>app.id===parseInt(id));
    console.log(singleApp);
    return (
        <div>
            ami details
        </div>
    );
};

export default AppDetails;