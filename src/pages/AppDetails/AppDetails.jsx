import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import like from '../../assets/icon-review.png';
import DetailsChart from '../DetailsChart/DetailsChart';

const AppDetails = () => {
    const {id}=useParams();
    const appDetails=useLoaderData();
    const singleApp=appDetails.find(app=>app.id===parseInt(id));
    const {downloads,image,ratingAvg,title,size,companyName,reviews,ratings,description}=singleApp;
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='p-5 md:p-20'>
                <div className='flex flex-col md:flex-row gap-8 items-center pb-10 border-b-1 border-gray-300'>
                    <div>
                        <img className='w-120 h-96' src={image} alt="" />
                    </div>
                    <div className='w-full'>
                        <div className='space-y-2 pb-8 border-b-1 border-gray-300'>
                            <h1 className='font-bold text-4xl'>{title}</h1>
                            <p className='text-[#627382] text-xl'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-20 my-10'>
                            <div className='space-y-3'>
                                <img src={download} alt="" />
                                <h5>Downloads</h5>
                                <h1 className='font-bold text-4xl'>{downloads/1000000}M</h1>
                            </div>
                            <div className='space-y-3'>
                                <img src={star} alt="" />
                                <h5>Average Ratings</h5>
                                <h1 className='font-bold text-4xl'>{ratingAvg}</h1>
                            </div>
                            <div className='space-y-3'>
                                <img src={like} alt="" />
                                <h5>Total Reviews</h5>
                                <h1 className='font-bold text-4xl'>{reviews}K</h1>
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#00D390] px-5 py-2 text-white rounded-[5px] font-bold cursor-pointer'>Install Now ({size} MB)</button>
                        </div>
                    </div>
                </div>
                <div><DetailsChart ratings={ratings}></DetailsChart></div>
                <div className='mt-10 space-y-3'>
                    <h1 className='font-bold text-3xl'>Discription</h1>
                    <p className='text-[#627382]'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;