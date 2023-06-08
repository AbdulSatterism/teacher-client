import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='bg-white'>
            <Carousel></Carousel>
            <Services></Services>
        </div>
    );
};

export default Home;