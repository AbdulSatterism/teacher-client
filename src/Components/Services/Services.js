import React, { useEffect, useState } from 'react';
import HomeServices from '../HomeServices/HomeServices';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://teacher-server.onrender.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='flex justify-center mx-auto my-8 text-center'>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold text-cyan-500'>My Services</h1>
                    <p className='text-xl font-thin text-slate-400'>i provide my education service as a teacher. i teach very easily with pleasure. i teach every student very carefully</p>
                </div>
            </div>
            <div className='grid gap-4 my-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    services.map(service => <HomeServices
                        key={service._id}
                        service={service}
                    >

                    </HomeServices>)
                }
            </div>
            <div className='flex justify-center mb-4'>
                <Link to='/allservice'>
                    <button className='btn w-32 bg-cyan-600'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;