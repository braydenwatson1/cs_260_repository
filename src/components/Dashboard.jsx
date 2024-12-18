import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import About from './About';
import axios from 'axios'; // You can use axios or fetch for API requests


const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    window.location.href = '/login'; // Redirect the user to the login page
};

const Dashboard = () => {
    // State for pushups and goal
    const [pushups, setPushups] = useState(0); // Initial pushup count
    const [goal, setGoal] = useState(10); // Initial goal value
    const [showAddPushupModal, setShowAddPushupModal] = useState(false);
    const [showChangeGoalModal, setShowChangeGoalModal] = useState(false);
    const [userData, setUserData] = useState(null); // State for storing fetched user data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const [pushupInput, setPushupInput] = useState('');
    const [goalInput, setGoalInput] = useState('');


    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/user-data', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming the token is stored in localStorage
                    }
                });
                setUserData(response.data); // Update state with fetched user data
                setPushups(Number(response.data.pushups) || 0); // Ensure pushups is a valid number
                setGoal(Number(response.data.goal) || 10); // Ensure goal is a valid number
            } catch (error) {
                setError('Failed to fetch user data');
                console.error(error);
            } finally {
                setLoading(false); // Stop loading after the fetch attempt
            }
        };

        fetchUserData();
    }, []);

    // Calculate the percentage progress towards the goal
    const progressPercent = Math.min((pushups / goal) * 100, 100); // Capped at 100%

    // Handlers to open and close the pop-ups
    const openAddPushupModal = () => setShowAddPushupModal(true);
    const closeAddPushupModal = () => setShowAddPushupModal(false);
    const openChangeGoalModal = () => setShowChangeGoalModal(true);
    const closeChangeGoalModal = () => setShowChangeGoalModal(false);

    // Function to handle adding pushups
    const handleAddPushups = async (amount) => {
        if (isNaN(amount) || amount <= 0) {
            console.log('Invalid amount of pushups');
            return; // If the amount is not valid, return early
        }
    
        setPushups((prevPushups) => prevPushups + amount);
        closeAddPushupModal();
    
        // Optional: Update pushups on the server
        try {
            await axios.post('/update-pushups', { pushups: pushups + amount }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        } catch (error) {
            console.error('Failed to update pushups', error);
        }
    };
    

    // Function to handle setting a new goal
    const handleSetGoal = async (newGoal) => {
        if (isNaN(newGoal) || newGoal <= 0) {
            console.log('Invalid goal');
            return; // Return early if the new goal is not valid
        }
    
        setGoal(newGoal);
        closeChangeGoalModal();
    
        // Optional: Update goal on the server
        try {
            await axios.post('/update-goal', { goal: newGoal }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        } catch (error) {
            console.error('Failed to update goal', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                            <p className="user-info">{userData?.name}</p>
                            <p className="user-info">{userData?.email}</p>
                            <p className="user-info">{pushups} total pushups completed!</p>
                            <p className="user-info"><Link to="/settings">edit your profile</Link></p>
                            <button className="logout-button" onClick={handleLogout}>Logout</button>
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
                            <Link to="/history">View full history and statistics</Link>
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
            {/* Add Pushup Modal */}
{showAddPushupModal && (
    <div className="modal">
        <p>How many pushups did you do?</p>
        <input 
            type="number" 
            value={pushupInput} 
            onChange={(e) => setPushupInput(e.target.value)} 
            placeholder="Enter pushups" 
        />
        <button onClick={() => handleAddPushups(Number(pushupInput))}>Add</button>
        <button onClick={closeAddPushupModal}>Cancel</button>
    </div>
)}


            {/* Change Goal Modal */}
        {showChangeGoalModal && (
        <div className="modal">
            <p>Set a new goal:</p>
            <input 
                type="number" 
                value={goalInput} 
                onChange={(e) => setGoalInput(e.target.value)} 
                placeholder="Enter new goal" 
            />
            <button onClick={() => handleSetGoal(Number(goalInput))}>Set Goal</button>
            <button onClick={closeChangeGoalModal}>Cancel</button>
        </div>
        )}

        </div>
    );
};

export default Dashboard;

