import React, { useState } from 'react';
import './CreateAccount.css';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const data = { email, password };

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            console.log(result);

            if (response.ok) {
                alert('Account created successfully');
            } else {
                alert('Failed to create account: ' + result);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }
    };

    return (
        <div className="big-div">
            <header>
                <h1>Create New Account</h1>
            </header>
            <div className="main-div">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <h3>Please Enter Your Information</h3>
                        
                        <label htmlFor="email_input_box">Email:</label>
                        <input 
                            className="login-boxes" 
                            type="email" 
                            id="email_input_box" 
                            name="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <br />

                        <label htmlFor="password_entry_box">New Password:</label>
                        <input 
                            className="login-boxes" 
                            type="password" 
                            id="password_entry_box" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <br />
                    
                        <button className="login-button" type="submit">Create Account</button>
                        
                    </form>
                </div>

                <video autoPlay muted loop className="video-background">
                    <source src="/My-Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <footer>
                <br />
                <br />
                <a 
                    target="_blank" 
                    href="https://github.com/braydenwatson1/cs_260_repository.git" 
                    rel="noopener noreferrer"
                >
                    Brayden Watson GitHub Repository
                </a>
            </footer>
        </div>
    );
};

export default CreateAccount;
