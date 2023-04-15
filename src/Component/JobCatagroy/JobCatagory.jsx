import React, { useEffect, useState } from 'react';
import SingleJobCatagory from './SingleJobCatagory';

const JobCatagory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/JobsCatagory.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-slate-800 font-bold text-center'>Job Category List</h2>
            <p className='text-slate-400 text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-24 gap-10 my-container justify-between mb-16'>
                {
                    jobs.map(job => <SingleJobCatagory job={job} key={job.id}></SingleJobCatagory>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;