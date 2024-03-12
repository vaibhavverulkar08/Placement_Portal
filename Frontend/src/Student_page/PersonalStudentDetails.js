import React from 'react';
import './InternshipDetails.css';

const InternshipDetails = () => {
    return (
        <div>
            <header className="header">
                <div className="logo-s">EXPERIENCE / INTERNSHIP</div>
                <nav className="nav">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Profile</button>
                    <button className="nav-button">Logout</button>
                </nav>
            </header>
            <div className="internship-details-container">
                <h2 className="heading">Internship Details</h2>
                <div className="form-container">
                    <div className="input-field">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="role">Role</label>
                        <input type="text" id="role" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="employmentType">Employment Type</label>
                        <input type="text" id="employmentType" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="endDate" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" rows="4"></textarea>
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
