import './Login.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

    const data = { email, password };

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.text();
        console.log(result); // Handle success or error from the backend

        if (response.ok) {
            alert('Login successful');
        } else {
            alert('Login failed: ' + result);
        }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

    return (
        <div className='bog-div'>
         <header>
            <h1>The Pushup Tracker</h1>
        </header>
        <main>
            <div className="content">
                <form onSubmit={handleSubmit}>
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

                    <label htmlFor="password_entry_box">Password:</label>
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

                    <button className="login-button" type="submit">
                        Login
                    </button>
                </form>
                <br />
                <Link to="/create-account">Create New Account</Link>
            </div>
            <video autoPlay muted loop className="video-background">
                    <source src="/My-Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        </main>
        <footer>
            <p style={{ color: 'red' }}>
                TEMPORARY NAV FOR GRADERS: NORMALLY YOU HAVE TO LOGIN, BUT FOR GRADING YOU CAN SKIP FOR NOW 
            </p>
            <br />
            <Link to="/create-account">Create Account Page</Link>
            <br />
            <Link to="/dashboard">Dashboard</Link>
            <br />
            <Link to="/history">History/Stats Page</Link>
            <br />
            <Link to="/settings">Settings</Link>
            <br />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/braydenwatson1/cs_260_repository.git">
                Brayden Watson GitHub Repository
            </a>
        </footer> 
        </div>
    );
};

export default Login;