import React from 'react'
import './Settings.css'

const Settings = () => {
    return (
        <div className="big-div">
            <header>
                <h1>Settings</h1>
            </header>
            <div className="main-div">
                    <h3>Edit Profile:</h3>

                        <button class="styled-button">Change Username</button> 
                        <button class="styled-button">Change Password</button> <br />
                        Change Profile Picture: <br />
                        <input class="fun-button" type="file" />
                        <br />
                        <br />
                        <a href="dashboard.html">return to dashboard</a>

            </div>
            <footer>
                <br />
                <br />
                <a target="_blank" href="https://github.com/braydenwatson1/cs_260_repository.git">Brayden Watson GitHub Repository</a>
            </footer> 
        </div>
    );
};

export default Settings;