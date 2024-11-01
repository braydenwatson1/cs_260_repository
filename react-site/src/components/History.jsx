import React from 'react';
import './History.css';
import barGraphPlaceholder from './../assets/bar_graph_placeholder.png'; // Correct image import
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div className='big-div'>
            <header>
                <h1>History</h1>
            </header>
            <div className='main-div'>
                <fieldset>
                    <label htmlFor="time-period"><strong>Pushups over the last:</strong></label>
                    <select className="styled-button" id="time-period">
                        <option value="last-week">1 Week</option>
                        <option value="last-month">1 Month</option>
                        <option value="last-6-months">6 Months</option>
                        <option value="last-year">1 Year</option>
                        <option value="all-time">All Time</option>
                    </select>
                </fieldset>
                <img width="400px" src={barGraphPlaceholder} alt="bar graph" />
                <br />
                <Link to="/dashboard">Dashboard</Link>{/* Use relative path */}
                <br />               
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/braydenwatson1/cs_260_repository.git">Brayden Watson GitHub Repository</a>
            </div>
        </div>
    );
};

export default History;