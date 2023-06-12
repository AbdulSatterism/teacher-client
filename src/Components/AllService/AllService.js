import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceList from '../AllServiceList/AllServiceList';

const AllService = () => {
    const allService = useLoaderData();
    // console.log(allService)
    return (
        <div className='grid gap-4 my-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                allService.map(service => <AllServiceList
                    key={service._id}
                    service={service}
                ></AllServiceList>)
            }
        </div>
    );
};

export default AllService;