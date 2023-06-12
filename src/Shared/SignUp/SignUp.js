import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
    }

    return (
        <form onSubmit={handleSignup} className="hero min-h-screen bg-base-200">
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center font-bold">Sign up</h1>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p className="label-text-alt link link-hover">Forgot password?</p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className='btn bg-cyan-500'>Login</button>
                    </div>
                    <p className='text-center'>All ready have an account? <Link className='text-orange-600 font-bold ' to='/login'>Login</Link> </p>
                </div>
            </div>
        </form>

    );
};

export default SignUp;