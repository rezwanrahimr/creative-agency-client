import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Images/Logo.png';
import navbar from './navbar.css';

const Navbar = () => {

    const NavItems = <>
        <li><Link>Home</Link></li>
        <li><Link>Our Portfolio</Link></li>
        <li><Link>Our Team</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link to='/signUp'><button className='button'>Login</button></Link></li>
    </>
    return (
        <div className="navbar pt-5 px-16" style={{backgroundColor:'#ffbc01'}}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}
                    </ul>
                </div>
                <img className='' src={Logo} alt="" width='35%' />
            </div>
            <div className=" hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal p-0">
                    {NavItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;