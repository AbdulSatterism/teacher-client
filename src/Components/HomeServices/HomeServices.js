import React from 'react';
import { FaAngleRight, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeServices = ({ service }) => {
    const { name, price, details, image, _id } = service;

    return (
        <div className="shadow-2xl card bg-base-100">
            <div>
                <figure><img src={image} className='p-2 rounded-sm w-96 h-80' alt="" /></figure>
            </div>
            <div className="card-body">
                <div className="justify-between text-cyan-500 card-title">
                    <h1>{name}</h1>
                    <h1>Course fee: {price}</h1>
                </div>
                <p className='text-justify text-slate-400'>
                    {details.length > 250 ?
                        `${details.substring(0, 50)}... see details ` : details
                    }
                </p>
                <div className="justify-between card-actions">
                    <button className='btn bg-cyan-500'>Enroll Now<FaShoppingCart></FaShoppingCart> </button>
                    <Link to={`/details/${_id}`}>
                        <button className='btn bg-cyan-500'>Details <FaAngleRight></FaAngleRight> </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;