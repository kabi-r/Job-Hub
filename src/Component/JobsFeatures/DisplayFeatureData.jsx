import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayFeatureData = ({feature}) => {
    const {id, image, title, company_name, job_time, location, salary, } = feature;
    const navigate = useNavigate()
    return (
        <div className='border px-8 py-2 rounded-md flex flex-col'>
            <img className='w-1/2' src={image} alt="" />
            <h4 className='text-2xl font-semibold text-stone-700 mt-3'>{title}</h4>
            <p className='text-lg text-slate-500'>{company_name}</p>
            <button className='border px-3 py-1 mt-2 mb-2 rounded-md w-1/5' >{job_time}</button>
            <div className='text-slate-400 flex justify-around'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <div className=' w-full self-end mt-auto px-5 pb-2'>
                <button  onClick={()=>navigate(`Statistics/${id}`)} className='my-btn w-full'>View Details</button>
            </div>
        </div>
    );
};

export default DisplayFeatureData;
