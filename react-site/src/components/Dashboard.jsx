import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='big-div'>
            <div className="live-updates">
                <p>Live updates:</p>
                <ul>
                    <li>Joe Biden just completed 4 pushups! (09/24/24 15:03)</li>
                    <li>Bruce Wayne just completed 675 pushups! (09/24/24 13:37)</li>
                    <li>Lord Voldemort just completed 25 pushups! (09/24/24 07:10)</li>
                    <li>Brigham Young just completed 90 pushups! (09/23/24 22:56)</li>
                    <li>Bruce Wayne just completed 1000 pushups! (09/23/24 13:21)</li>
                    <li>Jimmer Fredette just completed 160 pushups! (09/21/24 06:05)</li>
                </ul>
            </div>
            <div className="right-sections">
                <div className="middle-column"> 
                    <div className="profile-section">
                        <div className="profile-pic-section">
                            <img width="100px" src='/default_profile_pic.png' alt="default profile picture" /> <br />
                        </div>
                        <div className="profile-info-section">
                            <strong>Your Profile</strong><br />
                            <p className="user-info">User Name</p>
                            <p className="user-info">Email</p>
                            <p className="user-info">-n- total pushups completed!</p>
                            <p className="user-info"><Link to="/settings">edit your profile</Link></p>
                        </div>    
                    </div>
                    <div className="tracker-section">
                        <div className="tracker-top">
                            <div className="circle" id="circle">
                                <div className="progress" id="progress"></div>
                                <div className="goal" id="goal">Goal: <span id="goalValue">10</span> Push-ups</div>
                            </div>
                        </div>
                        <div className="tracker-bottom">
                            Pushup-Tracker <br />
                            <button className="edit-button" id="addPushup">+ pushups</button>
                            <button className="edit-button" id="editGoal">Edit Goal</button>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="stats-section">
                        <strong>Statistics</strong> <br /> <br />
                        <fieldset className="stats-box">
                            you have averaged -n- pushups over the past -n- days!
                            <button>edit days</button> <br />
                            you are on a -n- days streak! <br />
                            <Link to="/history">view full history</Link>
                        </fieldset>
                    </div>
                    <div className="motivational-section">
                        "Motivational Quote and image generated here. filler text. 123. filler text. 123. filler filler." <br /> <br />
                        <img src='/dumbell_picture.png' alt="motivational picture" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;