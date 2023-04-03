import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    return (
        // <nav className='navbar'>
        //     <ul>
        //         <Link><li className='navbar-logo'>BLOG</li></Link>
        //         <Link><li className='navbar-toggol-icon navbar-links'><HiMenu></HiMenu></li></Link>
        //         <Link><li className='navbar-links'>Home</li></Link>
        //         <Link><li className='navbar-links'>Post</li></Link>
        //         <Link><li className='navbar-links'>CreatePost</li></Link>
        //         <Link><li className='navbar-links'>Login</li></Link>
        //     </ul>
        // </nav>
        <header>
            <div className='navbar'>

                <span>  <Link className='nav-logo' to='/home'>BLOG</Link></span>
                <div className='nav-items'>

                    <Link><HiMenu className='hambarger'></HiMenu></Link>
                    <Link to='/home'>Home</Link>
                    <Link to='/blogPost'>BlogPost</Link>
                    <Link to='/createPost'>Create Post</Link>
                    <Link to='/login'>Login</Link>

                </div>
                <div className="nav-toggol">
                    <div className="bar"></div>
                </div>




            </div>
        </header>
    );
};

export default Navbar;