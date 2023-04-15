import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../Uitils/FakeDb';




const SingleFeatureJob = () => {
    const jobId = useParams()
    // console.log(job.jobId);
    const [featureJobs, setJobs] = useState([])
    useEffect(() => {
        fetch('/Jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const job = featureJobs.find(featureJob => featureJob.id === jobId.jobId)
    // console.log(job);
    const {id, title, description, responsibilities, requirements, experiences, salary, phone, email, address } = job || {}

    const handleCart = id =>{
        addToDb(id)
    }

    return (
        <div className='my-simple-container'>
            <h2 className='text-3xl font-bold text-center mt-5'>Job Details</h2>
            <div className='md:flex gap-8 items-center'>
                <div className='lg:w-3/5'>
                    <p className='font-bold my-8'>Job Description:<span className='font-normal text-stone-500'>{description}</span></p>
                    <p className='font-bold'>Job Responsibility:<span className='font-normal text-stone-500'>{responsibilities}</span></p>
                    <p className='font-bold mt-8 mb-5'>Educational Requirements:</p>
                    <p span className='font-normal text-stone-500'>{requirements}</p>
                    <p className='font-bold mt-8 mb-5'>Experiences:</p>
                    <p span className='font-normal text-stone-500'>{experiences}</p>
                </div>
                <div className='lg:w-2/5 w-full mt-16'>
                    <div className='bg-blue-100 px-5 py-10 rounded-md'>
                        <h3 className='text-lg font-bold mt-5'>Job Details</h3>
                        <hr className=' w-full border rounded-md border-blue-200 px-1 my-2' />
                        <p className='font-bold text-lg flex items-center gap-1'><CurrencyDollarIcon className="h-5 w-5 text-blue-500" />Salary:<span className='font-normal text-slate-500'>{salary}</span> </p>
                        <p className='font-bold text-base flex items-center gap-1'><CalendarDaysIcon className="h-5 w-4 text-blue-500"></CalendarDaysIcon>Job Title :<span className='font-normal text-slate-500'>{title}</span> </p>
                        <h4 className='text-lg font-bold mt-5'>Contact Information</h4>
                        <hr className=' w-full border rounded-md border-blue-200 px-1 my-2' />
                        <p className='font-bold text-lg flex items-center gap-1'><PhoneIcon className="h-5 w-5 text-blue-500" />Phone:<span className='font-normal text-slate-500'>{phone}</span> </p>
                        <p className='font-bold text-lg flex items-center gap-1'><EnvelopeIcon className="h-5 w-5 text-blue-500" />Email:<span className='font-normal text-slate-500'>{email}</span> </p>
                        <p className='font-bold text-lg flex items-center gap-1'><MapPinIcon className="h-5 w-5 text-blue-500" />Address:<span className='font-normal text-slate-500'>{address}</span> </p>
                    </div>
                    <button onClick={()=>{handleCart(id)}} className='my-btn w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleFeatureJob;