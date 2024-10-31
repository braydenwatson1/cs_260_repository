import React from 'react';
import './Login.css';
import backgroundVideo from './../assets/My-Video.mp4';

const Login = () => {
    return (
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
                <a href="html links/create_new_account.html">Create new account</a>
            </div>
            <video autoPlay muted loop className="video-background">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
};

export default Login;