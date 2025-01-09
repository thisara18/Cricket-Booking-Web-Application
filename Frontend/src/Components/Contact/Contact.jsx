import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/comment.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone-call.png'
import address from '../../assets/gps.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
             <h3>Send us a message <img src={msg_icon} alt="" /></h3>
             <p>Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
             Feel free rach out through contact us
            </p>
             <ul>
                <li><img src={email} alt="" />hashinthachanuka@gmail.com</li>
                <li><img src={phone} alt="" />0764769657</li>
                <li><img src={address} alt="" />No.34, Kandy</li>
             </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='enter your name' required/>
                <label>Your Number</label>
                <input type="tel" name='phone' placeholder='enter your number' required/>
                <label>Your Message</label>
                <textarea name="message" rows='6' placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span></span>
        </div>

    </div>
  )
}

export default Contact