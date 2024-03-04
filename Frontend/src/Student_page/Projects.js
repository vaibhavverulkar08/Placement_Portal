import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <header className="header">
                <div className="logo-s">PROJECT DETAILS</div>
                <nav className="nav">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Profile</button>
                    <button className="nav-button">Logout</button>
                </nav>
            </header>
            <div className="projects-container">
                <div className="projects-section">
                    <div className="input-group">
                        <label htmlFor="projectName">Project Title:</label>
                        <input type="text" id="projectName" name="projectName" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="projectDescription">Description:</label>
                        <textarea id="projectDescription" name="projectDescription" rows="4"></textarea>
                    </div>
                    <div className="input-group">
                        <label htmlFor="projectDuration">Technology:</label>
                        <input type="text" id="projectDuration" name="projectDuration" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="date" id="startDate" name="startDate" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="endDate">End Date:</label>
                        <input type="date" id="endDate" name="endDate" />
                    </div>
                    <div className="button-container">
                        <button className="save-btn">Save & Next</button>
                        <button className="edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
