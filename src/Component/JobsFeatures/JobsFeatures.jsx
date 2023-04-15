import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayFeatureData from './DisplayFeatureData';

const FeatureJobs = () => {
    const features = useLoaderData()
    // console.log(features);
    return (
        <div >
            <h2 className='text-3xl text-slate-800 font-bold text-center'>Feature Jobs</h2>
            <p className='text-slate-400 text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='my-container grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {
              features.map(feature => <DisplayFeatureData feature={feature} key={feature.id}></DisplayFeatureData> )  
            }
            </div>
        </div>
    );
};

export default FeatureJobs;