import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { signupUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        signupUser(email, password)
            .then((result) => {
                const user = result.user;
                handleUpdateUser(name, photo);
                console.log(user);
                form.reset();
                setError('');
            })
            .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage)
            });
    }

    const handleUpdateUser = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => {
                setError(err.message)
            })
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
                            <span className="label-text">photoURL</span>
                        </label>
                        <input type="url" name='photo' placeholder="photoURL" className="input input-bordered" />
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
                    <p className='text-center'>All ready have an account? <Link className='text-orange-600 font-bold ' to='/login'>Sign Up</Link> </p>

                    <p className='text-center text-orange-600' >{error}</p>
                </div>

            </div>
        </form>

    );
};

export default SignUp;