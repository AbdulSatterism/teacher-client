import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddService = () => {
    const [service, setService] = useState({});

    const handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service added successfully');
                    event.target.reset()
                }
            })
    }

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service };
        newService[field] = value;
        setService(newService)
    }

    return (
        <form onSubmit={handleSubmit} className="form-control w-2/3 shadow-2xl bg-base-100 flex mx-auto my-2 p-6 border-solid border-2 rounded-lg border-slate-200">
            <h1 className='text-center text-2xl text-cyan-500 font-bold'>Add Private Subject Name</h1>
            <label className="label">
                <span className="label-text">Enter Service Name</span>
            </label>
            <input onBlur={handleOnBlur} type="text" name='name' placeholder="Enter Service Name" required className="input input-bordered w-full" />

            <label className="label">
                <span className="label-text">Enter Service Price</span>
            </label>
            <input onBlur={handleOnBlur} type="number" name="price" placeholder="Enter Service Price" required className="input input-bordered w-full" />

            <label className="label">
                <span className="label-text">Enter Service Image URL</span>
            </label>
            <input onBlur={handleOnBlur} type="url" name='image' required placeholder="Enter Service Image URL" className="input input-bordered w-full" />

            <label className="label">
                <span className="label-text">Enter Service Details</span>
            </label>
            <textarea onBlur={handleOnBlur} name='details' placeholder="Enter Service Details" required className="textarea textarea-bordered textarea-md w-full" ></textarea>
            <br />
            <button type="submit" className='btn w-1/3 font-bold flex mx-auto justify-center bg-cyan-500'>Add Service</button>
        </form>

    );
};

export default AddService;