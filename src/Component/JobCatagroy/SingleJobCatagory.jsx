import React from 'react';

const SingleJobCatagory = ({job}) => {
    const { available_jobs, img, job_title } = job
    return (
        <div className='border p-5 rounded-xl'>
            <img className='rounded' src={img} alt="" />
            <h5 className='mt-5 text-lg font-semibold text-slate-500'>{job_title}</h5>
            <p className='mt-2 text-slate-400'>{available_jobs} Jobs Available </p>
        </div>
    );
};

export default SingleJobCatagory;