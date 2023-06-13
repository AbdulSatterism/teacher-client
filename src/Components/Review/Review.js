import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import ReviewList from './ReviewList';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/comment?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])


    return (
        <div>
            <h1 className='text-2xl text-cyan-500'>Your Total Review :{review.length}</h1>
            {
                review.map(rev => <ReviewList
                    key={rev._id}
                    rev={rev}
                ></ReviewList>)
            }
        </div>
    );
};

export default Review;