import React from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
    return (
        <div className="big-div">
            <header>
                <h1>Create New Account</h1>
            </header>
            <div className="main-div">
                <div className="content">
                    <form action="/login" method="POST">
                        <h3>Please Enter Your Information</h3>
                        
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

                        <label htmlFor="password_entry_box">New Password:</label>
                        <input 
                            className="login-boxes" 
                            type="password" 
                            id="password_entry_box" 
                            name="password" 
                            placeholder="Enter your password" 
                            required 
                        />
                        <br />
                    
                        <button className="login-button" type="submit">Create Account</button>
                        
                    </form>
                </div>

                <video autoPlay muted loop className="video-background">
                    <source src="../images/Exercise _ Stock_Video _ Free Footage.mp4" type="video/mp4" />
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