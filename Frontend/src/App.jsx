import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Ground from './Components/Ground/Ground';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Slider from './Components/Slider/Slider';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Booking from './Components/Booking/Booking';
import BookingConfirmation from './Components/BookingConfirmation/BookingConfirmation'; // Import the BookingConfirmation component

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Hero showText={true} />
                                <div className="container">
                                    <Title subTitle='Our Service' title='What we offer' />
                                    <Programs />
                                    <About />
                                    <Title subTitle='Gallery' title='Our Grounds' />
                                    <Ground />
                                    <Title subTitle='Testimonials' title='What members say' />
                                    <Slider />
                                    <Title subTitle='Contact Us' title='Get in Touch' />
                                    <Contact />
                                </div>
                            </>
                        } 
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/booking-confirmation" element={<BookingConfirmation />} /> {/* Add BookingConfirmation route */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
