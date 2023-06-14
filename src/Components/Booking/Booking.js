import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Booking = () => {
    const { name, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const bookingService = {
            name: name,
            email: email,
            serviceName: serviceName,
            price: price,
            phone: phone
        }
        // console.log(bookingService)
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Service Booking Successfully');
                    event.target.reset()
                }
            })
    }

    return (
        <form onSubmit={handleBooking} className="form-control w-2/3 shadow-2xl bg-base-100 flex mx-auto my-2 p-6 border-solid border-2 rounded-lg border-slate-200">
            <h1 className='text-center m-2 text-2xl text-cyan-500 font-bold'>Booking Subject of {name}</h1>

            <input type="text" name='name' defaultValue={user?.displayName} readOnly className="input input-bordered m-2 w-full" />

            <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered m-2 w-full" />

            <input type="text" name="serviceName" defaultValue={name} readOnly className="input input-bordered m-2 w-full" />

            <input type="number" name="price" defaultValue={price} readOnly className="input input-bordered m-2 w-full" />

            <input type="number" name="phone" required placeholder="enter phone number" className="input input-bordered m-2 w-full" />

            <br />
            <button type="submit" className='btn w-1/3 font-bold flex mx-auto justify-center bg-cyan-500'>Book</button>
        </form>

    );
};

export default Booking;