import React from 'react';
import math from '../../Images/bookImage/math2.jpg'
import physics from '../../Images/bookImage/physics2.png'
import chemistry from '../../Images/bookImage/chemistry.jpg';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const items = [
        {
            image: physics,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: chemistry,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: math,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div>
            <div className="w-full h-screen py-10 carousel">
                {
                    items.map(slide => <CarouselItem
                        key={slide.id}
                        slide={slide}
                    ></CarouselItem>)
                }
            </div>
        </div>
    );
};

export default Carousel;