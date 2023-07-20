import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import BookItemList from './BookItemList';
import { toast } from 'react-hot-toast';

const BookedItem = () => {
    const { user, logOut } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch(`https://teacher-server.onrender.com/booking?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json();
            })
            .then(data => {
                setBooking(data)
                // console.log('inside receve', data)
            })
    }, [user?.email, logOut]);

    // console.log(booking)
    const handleDelete = (id) => {
        const agree = window.confirm("Are you sure want to cancel this service");
        if (agree) {
            fetch(`https://teacher-server.onrender.com/booking/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Comment deleted Successfully");
                        const remainingComment = booking.filter(remCom => remCom._id !== id);
                        setBooking(remainingComment)
                    }
                })
        }
    }
    return (
        <div className='h-full'>
            <h1 className='text-2xl text-center text-cyan-500'>Your Total Booking :{booking.length}</h1>
            <div className="overflow-x-auto w-full grid">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Phone</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <BookItemList
                                key={book._id}
                                book={book}
                                handleDelete={handleDelete}
                            ></BookItemList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedItem;