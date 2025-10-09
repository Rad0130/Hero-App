import React from 'react';
import play from '../../assets/play.png';
import group from '../../assets/Group.png';
import hero from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-[1700px] mx-auto pt-15 px-2 md:px-0'>
                <div className='text-center space-y-5'>
                    <h1 className='font-extrabold text-5xl md:text-7xl'>We Build</h1>
                    <h1 className='font-extrabold text-5xl md:text-7xl'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className='text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        <br />
                        <span>Our goal is to turn your ideas into digital experiences that truly make an impact.</span></p>
                </div>
                <div className='flex justify-center items-center gap-4 mt-10'>
                    <div className='flex items-center gap-2 border-1 border-gray-300 px-4 py-2 rounded-[5px]'>
                        <img src={play} alt="" />
                        <h3>Google Play</h3>
                    </div>
                    <div className='flex items-center gap-2 border-1 border-gray-300 px-4 py-2 rounded-[5px]'>
                        <img src={group} alt="" />
                        <h3>App Store</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10 px-2 md:px-0'>
                <img src={hero} alt="" />
            </div>
            <div>
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 md:px-80 py-2 md:py-20 text-center space-y-10'>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col md:flex-row justify-around items-center'>
                        <div className='space-y-2 mb-10 md:mb-0'>
                            <h4>Total Downloads</h4>
                            <h1 className='font-extrabold text-7xl'>29.6M</h1>
                            <h4>21% more than last month</h4>
                        </div>
                        <div className='space-y-2 mb-10 md:mb-0'>
                            <h4>Total Reviews</h4>
                            <h1 className='font-extrabold text-7xl'>906K</h1>
                            <h4>46% more than last month</h4>
                        </div>
                        <div className='space-y-2'>
                            <h4>Active Apps</h4>
                            <h1 className='font-extrabold text-7xl'>132+</h1>
                            <h4>31 more will Launch</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;