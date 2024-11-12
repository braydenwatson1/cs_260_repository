import React, { useState } from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import About from './About';

const Dashboard = () => {
    // State for pushups and goal
    const [pushups, setPushups] = useState(0); // Initial pushup count
    const [goal, setGoal] = useState(10); // Initial goal value
    const [showAddPushupModal, setShowAddPushupModal] = useState(false);
    const [showChangeGoalModal, setShowChangeGoalModal] = useState(false);

    // Calculate the percentage progress towards the goal
    const progressPercent = Math.min((pushups / goal) * 100, 100); // Capped at 100%

    // Handlers to open and close the pop-ups
    const openAddPushupModal = () => setShowAddPushupModal(true);
    const closeAddPushupModal = () => setShowAddPushupModal(false);
    const openChangeGoalModal = () => setShowChangeGoalModal(true);
    const closeChangeGoalModal = () => setShowChangeGoalModal(false);

    // Function to handle adding pushups
    const handleAddPushups = (amount) => {
        setPushups(prevPushups => prevPushups + amount);
        closeAddPushupModal();
    };

    // Function to handle setting a new goal
    const handleSetGoal = (newGoal) => {
        setGoal(newGoal);
        closeChangeGoalModal();
    };

    return (
        <div className='big-div'>
            <div className="live-updates">
                <p>Live updates:</p>
                <ul>
                    <li>Joe Biden just completed 4 pushups! (09/24/24 15:03)</li>
                    <li>Bruce Wayne just completed 675 pushups! (09/24/24 13:37)</li>
                    {/* Add more items as needed */}
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
                            <p className="user-info">{pushups} total pushups completed!</p>
                            <p className="user-info"><Link to="/settings">edit your profile</Link></p>
                        </div>    
                    </div>
                    <div className="tracker-section">
                        <div className="tracker-top">
                            <div className="circle" style={{ '--percent': `${progressPercent}%` }}>
                                <div className="progress"></div>
                                <div className="goal">Goal: {goal} Push-ups</div>
                            </div>
                        </div>
                        <div className="tracker-bottom">
                            Pushup-Tracker <br />
                            <button className="edit-button" onClick={openAddPushupModal}>+ pushups</button>
                            <button className="edit-button" onClick={openChangeGoalModal}>Edit Goal</button>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="stats-section">
                        <strong>Statistics</strong> <br /> <br />
                        <fieldset className="stats-box">
                            <br />
                            <Link to="/history">View full history and statitics</Link>
                            <br />
                            <br />
                        </fieldset>
                    </div>
                    <div className="motivational-section">
                        <About /> {/* Insert the About component here */}
                    </div>
                </div>
            </div>

            {/* Add Pushup Modal */}
            {showAddPushupModal && (
                <div className="modal">
                    <p>How many pushups did you do?</p>
                    <input type="number" id="pushupInput" placeholder="Enter pushups" />
                    <button onClick={() => handleAddPushups(Number(document.getElementById("pushupInput").value))}>Add</button>
                    <button onClick={closeAddPushupModal}>Cancel</button>
                </div>
            )}

            {/* Change Goal Modal */}
            {showChangeGoalModal && (
                <div className="modal">
                    <p>Set a new goal:</p>
                    <input type="number" id="goalInput" placeholder="Enter new goal" />
                    <button onClick={() => handleSetGoal(Number(document.getElementById("goalInput").value))}>Set Goal</button>
                    <button onClick={closeChangeGoalModal}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;