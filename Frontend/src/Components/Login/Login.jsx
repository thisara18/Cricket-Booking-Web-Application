import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your styling here

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // Changed to email
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // New state for success/error message
    const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:8081/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Corrected headers case
                body: JSON.stringify({ email, password }) // Send email and password
            });

            if (response.ok) {
                setMessage("Login successful!");
                setIsLoggedIn(true); // Set login status to true
                setTimeout(() => {
                    navigate('/'); // Navigate to homepage on successful login after delay
                }, 1000); // 1-second delay before navigation
            } else if (response.status === 403) {
                setMessage("Login failed. Access forbidden.");
            } else {
                setMessage("Login failed. Please check your credentials and try again.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Welcome Back!</h1>
                {!isLoggedIn ? ( // If not logged in, show login form
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit">Login</button>
                    </form>
                ) : ( // If logged in, display user's email on the button
                    <button disabled>{email}</button> // Disable button after login
                )}
                {message && <p className="message">{message}</p>} {/* Display success/error message */}
                {!isLoggedIn && <p>Don't have an account? <a href="/signup">Sign Up</a></p>}
            </div>
        </div>
    );
};

export default Login;
