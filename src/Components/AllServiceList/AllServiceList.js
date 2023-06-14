import React from 'react';
import { FaAngleRight, FaShoppingCart } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllServiceList = ({ service }) => {
    const { name, _id, details, price, image } = service;
    return (
        <div className="shadow-2xl card bg-base-100">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} className='p-2 rounded-sm w-96 h-80' alt="" />
                </PhotoView>
            </PhotoProvider>
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
                    <Link to={`/booking/${_id}`}>
                        <button className='btn bg-cyan-500'>Enroll Now<FaShoppingCart></FaShoppingCart> </button>
                    </Link>

                    <Link to={`/details/${_id}`}>
                        <button className='btn bg-cyan-500'>Details <FaAngleRight></FaAngleRight> </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServiceList;