import React from 'react';
import InfoCard from './InfoCard';
import phone from '../../Images/contact/phone1.png'
import clock from '../../Images/contact/clock1.png'
import location from '../../Images/contact/location.png'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Private Zone On',
            description: 'Open 4.00 pm to 9.00 pm Saturday To Thursday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-accent to-black'
        },
        {
            id: 2,
            name: 'Zone Location',
            description: 'Rangpur Medical Collage Mor',
            icon: location,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact',
            description: '01710426245, abdulsatter.ism@gmail.com',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-success-content to-coffee'
        },
    ]
    return (
        <div className='grid gap-6 mt-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;