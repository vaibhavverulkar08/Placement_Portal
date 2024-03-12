import React from 'react';
import './PersInfo.css';

 const PersInfo = () => {
    return (
        <div>
            <header className="header">
                <div className="logo-s">PERSONAL INFORMATION</div>
                <nav className="nav">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Profile</button>
                    <button className="nav-button">Logout</button>
                </nav>
            </header>
            <div className="pers-info-container">
                <div className="pers-info-section">
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="mobileNo">Mobile No.:</label>
                        <input type="tel" id="mobileNo" name="mobileNo" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="dob">DOB:</label>
                        <input type="date" id="dob" name="dob" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address:</label>
                        <textarea id="address" name="address" rows="4"></textarea>
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

export default PersInfo;
