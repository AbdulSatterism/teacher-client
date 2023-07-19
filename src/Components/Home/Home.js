import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import ContactForm from '../ContactForm/ContactForm';
import InfoCards from '../InfoCard/InfoCards';

const Home = () => {
    return (
        <div className='bg-white'>
            <Carousel></Carousel>
            <Services></Services>
            <InfoCards></InfoCards>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;