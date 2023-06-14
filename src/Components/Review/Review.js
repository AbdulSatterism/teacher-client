import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import ReviewList from './ReviewList';
import { toast } from 'react-hot-toast';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/comment?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const agree = window.confirm("Are you sure want to delete this comment");
        if (agree) {
            fetch(`http://localhost:5000/comment/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Comment deleted Successfully");
                        const remainingComment = review.filter(remCom => remCom._id !== id);
                        setReview(remainingComment)
                    }
                })
        }
    }

    return (
        <div className='h-screen'>
            <h1 className='text-2xl text-center text-cyan-500'>Your Total Review :{review.length}</h1>
            <div className="overflow-x-auto w-full grid">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Reviews</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(rev => <ReviewList
                                key={rev._id}
                                rev={rev}
                                handleDelete={handleDelete}
                            ></ReviewList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;