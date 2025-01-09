import React from 'react';
import './Hero.css';

const Hero = ({ showText }) => {
    return (
        <div className='hero'>
            {showText ? (
                <div className='hero-text'>
                    <h1>Hello, Welcome to Club Cricket</h1>
                    <p>We are the number one cricket club in Sri Lanka and we send players every year.</p>
                    <button className='btn'>Explore more</button>
                </div>
            ) : null}
        </div>
    );
};

export default Hero;
