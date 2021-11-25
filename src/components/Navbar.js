import React from 'react';
import logo from '../img/logo2.png'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='px-10 py-3 flex justify-between items-center'>
            <img src={logo} alt="hot onion logo" width='110px' />
            <div className=" flex space-x-4 items-center font-semibold">
                <Link to='#'><FiShoppingCart size={18} /> </Link>
                <Link to='#'>Login </Link>
                <Link to='#' className=' text-white bg-red-500 hover:bg-red-600 px-5 py-1.5 font-medium rounded-full'>Sign Up </Link>

            </div>
        </div>
    );
};

export default Navbar;