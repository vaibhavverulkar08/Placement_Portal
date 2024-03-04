import React from 'react';
import './InternshipDetails.css';

const InternshipDetails = () => {
    return (
        <div>
            <header className="header">
                <div className="logo-s">INTERNSHIP DETAILS</div>
                <nav className="nav">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Profile</button>
                    <button className="nav-button">Logout</button>
                </nav>
            </header>
            <div className="internship-details-container">
                <div className="internship-details-section">
                    <div className="input-group">
                        <label htmlFor="companyName">Company Name:</label>
                        <input type="text" id="companyName" name="companyName" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" name="role" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="employment-type">Employment Type:</label>
                        <div className="employment-options">
                            <div>
                                <input type="checkbox" id="job" name="employment-type" value="Job" />
                                <label htmlFor="job">Job</label>
                            </div>
                            <div>
                                <input type="checkbox" id="internship" name="employment-type" value="Internship" />
                                <label htmlFor="internship">Internship</label>
                            </div>
                            <div>
                                <input type="checkbox" id="full-time" name="employment-type" value="Full-Time" />
                                <label htmlFor="full-time">Full-Time</label>
                            </div>
                            <div>
                                <input type="checkbox" id="part-time" name="employment-type" value="Part-Time" />
                                <label htmlFor="part-time">Part-Time</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="date" id="startDate" name="startDate" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="endDate">End Date:</label>
                        <input type="date" id="endDate" name="endDate" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="duration">Duration:</label>
                        <input type="text" id="duration" name="duration" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="4"></textarea>
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

export default InternshipDetails;
