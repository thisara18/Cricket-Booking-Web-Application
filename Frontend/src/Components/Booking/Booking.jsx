import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css'; // Import your styling here

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { program } = location.state || {}; // Get the program name from state

    const [cusName, setCusName] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [message, setMessage] = useState(''); // State for messages

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            cusName,
            mobile,
            date,
            startTime,
            endTime
        };

        try {
            const response = await fetch("http://localhost:8080/api/v1/softground/addSoftground", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingData)
            });

            // Check if the response status is OK
            if (response.ok) {
                const successMessage = await response.text(); // Capture success message
                setMessage(successMessage); // Display success message from backend
            } else {
                const errorMessage = await response.text(); // Capture the error message
                setMessage(errorMessage); // Display the error message from backend
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later."); // General error message
            console.error("Error:", error);
        }
    };

    const handleNavigate = () => {
        navigate('/booking-confirmation', {
            state: { cusName, mobile, date, startTime, endTime } // Pass booking details to the confirmation page
        });
    };

    return (
        <div className="booking-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={cusName} 
                    onChange={(e) => setCusName(e.target.value)} 
                    required 
                />
                <input 
                    type="tel" 
                    placeholder="Mobile" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
                    required 
                />
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                />
                <input 
                    type="time" 
                    value={startTime} 
                    onChange={(e) => setStartTime(e.target.value)} 
                    required 
                />
                <input 
                    type="time" 
                    value={endTime} 
                    onChange={(e) => setEndTime(e.target.value)} 
                    required 
                />
                <button type="submit">Book Now</button>
                {message && <p className="message">{message}</p>} {/* Display messages */}
            </form>
            <button onClick={handleNavigate} className="navigate-button">
                View Bookings
            </button>
        </div>
    );
};

export default Booking;
