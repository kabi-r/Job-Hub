import React from 'react';
import img from '../../assets/pngwing.com (16).png'

const Header = () => {
    return (
        <div className='flex justify-between items-center my-container gap-5 mb-16'>
            <div className='w-1/2'>
                <h2 className='text-5xl font-bold '>One Step <br />Closer To Your <br /> <span className='text-violet-600'>Dream Job</span></h2>
                <p className='text-sm text-slate-400 mt-5'>Explore thousands of job opportunities with all <br /> the information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='my-btn'>Get Started</button>
            </div>
            <div className=''>
                <img className='w-3/4 ml-auto' src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;