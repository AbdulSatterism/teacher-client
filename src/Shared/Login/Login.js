import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/context/AuthProvider/AuthProvider';

const Login = () => {
    const { signinUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signinUser(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user?.email
                }
                setError('');
                form.reset()
                // for jwt 
                fetch('https://teacher-server.onrender.com/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        // local storage is not the best place for store jwt 
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (

        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center font-bold">Login now</h1>
                <div className="card-body">
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
                    <p className='text-center'>New User <Link className='text-orange-600 font-bold ' to='/signup'>Sign up</Link> </p>

                    <p className='text-center text-orange-600' >{error}</p>
                </div>
            </div>
        </form>

    );
};

export default Login;