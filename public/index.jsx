import React from 'react';
import './../src/components/Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='bog-div'>
         <header>
            <h1>The Pushup Tracker</h1>
        </header>
        <main>
            <div className="content">
                <form action="/login" method="POST">
                    <h3>LOGIN</h3>
                    <label htmlFor="email_input_box">Email:</label>
                    <input 
                        className="login-boxes" 
                        type="email" 
                        id="email_input_box" 
                        name="email" 
                        placeholder="Enter your email" 
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
                        required 
                    />
                    <br />
                    
                    <button className="login-button" type="submit">Login</button>
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