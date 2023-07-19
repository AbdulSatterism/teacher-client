import React from 'react';
import teacher from '../../Images/teacher/teacher.png'


const Carousel = () => {

    return (
        <div className=" hero-content  flex-col lg:flex-row-reverse bg-gradient-to-r from-sky-100 to-indigo-400 p-4">
            <img src={teacher} className="lg:w-1/2" alt='' />
            <div className='w-1/2'>
                <h1 className="text-5xl font-bold">Welcome To My <br /> <span className='text-orange-500'>Private Zone</span></h1>
                <p className="py-6">Teaching is my favorite occupation i teach my subject with pleasure and enjoyable. I share my knowledge with students. </p>
                <button className="btn btn-primary">Explore more</button>
            </div>
        </div>
    );
};

export default Carousel;