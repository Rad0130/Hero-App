import React from 'react';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    const {downloads,image,id,ratingAvg,title}=app;
    return (
        <Link to={`/details/${id}`}>
            <div>
                <div className='space-y-2 p-5 rounded-[5px] shadow-2xl'>
                    <div>
                        <img className='w-full border-1 border-gray-300 rounded-[5px] min-h-[240px] md:min-h-[368px]' src={image} alt="" />
                    </div>
                    <h3 className=''>{title}</h3>
                    <div className='flex justify-between items-center'>
                        <div className='bg-[#F1F5E8] rounded-[5px]'>
                            <div className='flex items-center gap-1 px-2 py-0.5'>
                                <img className='w-4 h-4' src={download} alt="" />
                                <p className='text-[#00D390]'>{downloads}</p>
                            </div>
                        </div>
                        <div className='bg-[#FFF0E1] rounded-[5px]'>
                            <div className='flex items-center gap-1 px-2 py-0.5'>
                                <img className='w-4 h-4' src={star} alt="" />
                                <p className='text-[#FF8811]'>{ratingAvg}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleApp;