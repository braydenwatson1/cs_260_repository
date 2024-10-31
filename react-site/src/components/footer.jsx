import React from 'react';
import './Login.css';

const Footer = () => {
    return (
        <footer>
            <p style={{ color: 'red' }}>
                TEMPORARY NAV FOR GRADERS: NORMALLY YOU HAVE TO LOGIN, BUT FOR GRADING YOU CAN SKIP FOR NOW 
            </p>
            <br />
            <a href="html links/create_new_account.html">create account page</a>
            <br />
            <a href="html links/dashboard.html">dashboard</a>
            <br />
            <a href="html links/history.html">history/stats page</a>
            <br />
            <a href="html links/settings.html">settings</a>
            <br />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/braydenwatson1/cs_260_repository.git">
                Brayden Watson GitHub Repository
            </a>
        </footer> 
    );
};

export default Footer;

