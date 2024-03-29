import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo/logo.png'
import { AuthContext } from '../../Components/context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(() => { })
    }

    const navItems = <>
        <li className='font-semibold '><Link to='/'>Home</Link></li>
        <li className='font-semibold '><Link to='/booking'>Booked Item</Link></li>
        <li className='font-semibold '><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold '><Link to='/addservice'>Add Service</Link></li>
        <li className='font-semibold '><Link to='/review'>Review</Link></li>
        {
            user?.uid ?
                <>

                    <li onClick={handleLogOut} className='font-semibold '><Link>Sign Out</Link></li>
                    <li className='font-semibold '><Link>{user?.displayName}</Link></li>
                </>
                :
                <>
                    <li className='font-semibold '><Link to='/login'>Login</Link></li>
                </>

        }
    </>


    return (
        <div>
            <div className="navbar h-20 bg-neutral-200 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} className='w-36 h-20 rounded' alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;