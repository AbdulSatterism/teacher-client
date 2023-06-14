import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Comment = () => {
    const { name } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = form.serviceName.value;
        const comment = form.comment.value;
        const review = {
            name: name,
            email: email,
            serviceName: serviceName,
            comment: comment
        }
        // console.log(review)
        fetch('http://localhost:5000/comment', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Comment Added Successfully');
                    event.target.reset()
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} className="form-control w-2/3 shadow-2xl bg-base-100 flex mx-auto my-2 p-6 border-solid border-2 rounded-lg border-slate-200">
            <h1 className='text-center m-2 text-2xl text-cyan-500 font-bold'>Review of {name}</h1>

            <input type="text" name='name' defaultValue={user?.displayName} readOnly className="input input-bordered m-2 w-full" />

            <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered m-2 w-full" />

            <input type="text" name="serviceName" defaultValue={name} readOnly className="input input-bordered m-2 w-full" />

            <textarea name='comment' placeholder="Express your comment" required className="textarea m-2 textarea-bordered textarea-md w-full" ></textarea>
            <br />
            <button type="submit" className='btn w-1/3 font-bold flex mx-auto justify-center bg-cyan-500'>Add Comment</button>
        </form>

    );
};


export default Comment;