import React from 'react'
import './About.css'
import about_img from '../../assets/cri.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
        </div>
        <div className='about-right'>
            <h3>ABOUT CLUB</h3>
            <h2>Improve the cricket ability</h2>
            <p>We are the number one cricket club in sri lanka.
             we provide all the resources to play a quality cricket. 
             Also we send players to national team of Sri lanka all over
              the decade and come and get unforgattable cricket experience with our club</p>

        </div>

    </div>
  )
}

export default About