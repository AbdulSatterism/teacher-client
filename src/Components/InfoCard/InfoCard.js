import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, bgClass, icon } = card;
    return (
        <div className={`card p-6 text-white md:card-side shadow-xl ${bgClass}`}>
            <figure><img className='w-24 rounded-sm' src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;