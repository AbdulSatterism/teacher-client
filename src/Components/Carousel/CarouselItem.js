import React from 'react';
import './Carousel.css'

const CarouselItem = ({ slide }) => {
    const { id, prev, next, image } = slide;
    return (

        <div id={`slide${id}`} className="relative w-full carousel-item">
            <img src={image} className="w-full" alt='' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default CarouselItem;