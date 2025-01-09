import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // Import your styling here

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // State for success/error message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8081/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name, email, password })
            });

            if (response.ok) {
                setMessage("Sign-up successful! Redirecting to login...");
                setTimeout(() => {
                    navigate('/login'); // Redirect to login after success
                }, 1500); // Delay to allow message display
            } else {
                setMessage("Sign-up failed. Please try again.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="User name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
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
                    <button type="submit">Sign Up</button>
                </form>
                {message && <p className="message">{message}</p>} {/* Display success/error message */}
                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p> {/* Add login link */}
            </div>
        </div>
    );
};

export default Signup;
