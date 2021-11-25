import React from 'react';
import logo from '../img/logo.png'

const Footer = () => {
    return (
        <div className=' bg-black text-gray-300 p-10 text-sm'>
            <div>
                <div className=' grid lg:grid-cols-5 md:grid-cols-3'>
                    <img src={logo} width='110px' alt="Hot onion" className='lg:col-span-3' />
                    <div>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up ot deliver</p>
                        <p>Add your Restaurent</p>
                    </div>
                    <div>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurent near me</p>
                    </div>
                </div>
                <div className=' grid grid-cols-7 pt-5 '>
                    <p className='text-gray-500 col-span-4'>Copywright © 2021 Hot onion</p>
                    <p>Privecy policy.</p>
                    <p>Terms of use</p>
                    <p>Pricing</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;