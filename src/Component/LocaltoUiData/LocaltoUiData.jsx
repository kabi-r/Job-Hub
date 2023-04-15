import React from 'react';
import {  MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const LocaltoUiData = ({item}) => {
    const navigate = useNavigate()
    // console.log(item);
    const {id,image, title, company_name, job_time, location, salary} =item
    return (
        <div className='flex justify-between items-center border-2 my-container mt-5 rounded-md'>
            <div className='flex items-center gap-10'>
                <img className='w-1/4'  src={image} alt="" />
                <ul>
                    <li className='font-bold'>{title}</li>
                    <li className='text-xl text-gray-400'>{company_name}</li>
                    <div>
                        <button className='border mt-2 font-medium rounded-lg text-sm px-5 py-2.5 r mr-2 mb-2'>{job_time}</button>
                        
                    </div>
                    <div className='flex gap-10'>
                        <p className='flex'><MapPinIcon className='w-6'></MapPinIcon>{location}</p>
                        <p className='flex'><CurrencyDollarIcon className='w-6'></CurrencyDollarIcon>{salary}</p>
                        <p></p>
                    </div>
                </ul>
            </div>
            <div>
                <button onClick={()=>navigate(`../Statistics/${id}`)} className='my-btn '>View Details</button>
            </div>
        </div>
    );
};

export default LocaltoUiData;