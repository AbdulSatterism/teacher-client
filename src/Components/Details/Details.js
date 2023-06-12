import React from 'react';
import { FaComment, FaShoppingCart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { name, image, details } = useLoaderData();
    console.log(name)
    return (
        <div className="hero min-h-screen p-4 bg-gradient-to-r from-violet-300 to-fuchsia-400">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className=" w-96 h-80 rounded-lg shadow-xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6 text-inherit">{details}</p>
                    <div className='justify-between card-actions'>
                        <button className="btn bg-cyan-500">enroll now<FaShoppingCart></FaShoppingCart> </button>
                        <button className="btn bg-cyan-500">comment<FaComment></FaComment> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;