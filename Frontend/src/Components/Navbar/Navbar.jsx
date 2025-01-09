import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';
import menu from '../../assets/menus.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        const loginStatus = localStorage.getItem('isLoggedIn');
        const storedEmail = localStorage.getItem('userEmail');
        
        if (loginStatus === 'true' && storedEmail) {
            setIsLoggedIn(true);
            setUserEmail(storedEmail);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleLogout = () => {
        // Clear login status and email from localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false);
        setUserEmail('');
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <h2>CRICKET</h2>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact"><button className='btn'>Contacts</button></Link></li>
                {isLoggedIn ? (
                    <li>
                        <span>{userEmail}</span> {/* Display user email */}
                        <button className='btn' onClick={handleLogout}>Logout</button> {/* Logout button */}
                    </li>
                ) : (
                    <li>
                        <Link to="/login">
                            <button className='btn'>Login</button>
                        </Link>
                    </li>
                )}
            </ul>
            <img src={menu} alt="Menu" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
