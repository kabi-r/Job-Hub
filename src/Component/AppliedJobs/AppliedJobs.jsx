import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LocaltoUiData from '../LocaltoUiData/LocaltoUiData';

const AppliedJobs = () => {
    const { products, initialCart } = useLoaderData()
    console.log(initialCart)
    return (
        <div>
            {initialCart.map(item => <LocaltoUiData item={item} key={item.id}></LocaltoUiData>)
            }
        </div>
    )
};

export default AppliedJobs;