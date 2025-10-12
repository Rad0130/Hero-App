import React from 'react';
import error from '../../assets/error-404.png';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router';

const ErrorElement = () => {
    return (
        <div>
            <div className='max-w-[1700px] mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='bg-[#F5F5F5]'>
                <div className='text-center p-2 md:p-30'>
                    <div className='flex justify-center'>
                        <img src={error} alt="" />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-5xl'>Oops, page not found!</h1>
                        <p>The page you are looking for is not available.</p>
                        <Link to="/"><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-1.5 text-white rounded-[5px] font-bold cursor-pointer'>Go Back!</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorElement;