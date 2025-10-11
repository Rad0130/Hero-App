import React from 'react';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';

const StoredApp = ({installedApp}) => {
    const {downloads,image,size,ratingAvg,title}=installedApp;
    return (
        <div className='bg-white rounded-[5px]'>
                    <div className='flex justify-between items-center p-2'>
                        <div className='flex items-center gap-4'>
                            <img className='w-20 h-20 rounded-2xl' src={image} alt="" />
                            <div className='space-y-4'>
                                <div>
                                    <h1 className='text-2xl'>{title}</h1>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <div className='flex items-center gap-1 px-2 py-0.5'>
                                            <img className='w-4 h-4' src={download} alt="" />
                                            <p className='text-[#00D390]'>{downloads}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1 px-2 py-0.5'>
                                            <img className='w-4 h-4' src={star} alt="" />
                                            <p className='text-[#FF8811]'>{ratingAvg}</p>
                                        </div>
                                    </div>
                                    <div>{size} MB</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='px-4 py-1 bg-[#00D390] text-white font-bold rounded-[5px]'>Uninstall</button>
                        </div>
                    </div>
                </div>
    );
};

export default StoredApp;