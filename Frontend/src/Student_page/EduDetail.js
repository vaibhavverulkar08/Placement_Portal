import React from 'react';
import './EduDetail.css';

const EduDetail = () => {
    return (
        <div>
            <header className="header">
                <div className="logo-s">EDUCATIONAL DETAILS</div>
                <nav className="nav">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Profile</button>
                    <button className="nav-button">Logout</button>
                </nav>
            </header>
            <div className="edu-detail-container">
                <div className="edu-detail-section">
                    <h2>10th Details</h2>
                    <div className="input-group">
                        <label htmlFor="schoolName10">School Name:</label>
                        <input type="text" id="schoolName10" name="schoolName10" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="gradePercentage10">Grade/Percentage:</label>
                        <input type="text" id="gradePercentage10" name="gradePercentage10" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="yearPassing10">Year of Passing:</label>
                        <input type="text" id="yearPassing10" name="yearPassing10" />
                    </div>
                </div>

                <div className="edu-detail-section">
                    <h2>12th/Diploma Details</h2>
                    <div className="input-group">
                        <label htmlFor="collegeName12">College Name:</label>
                        <input type="text" id="collegeName12" name="collegeName12" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="stream12">Stream:</label>
                        <input type="text" id="stream12" name="stream12" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="yearPassing12">Year of Passing:</label>
                        <input type="text" id="yearPassing12" name="yearPassing12" />
                    </div>
                </div>

                <div className="edu-detail-section">
                    <h2>Degree Program</h2>
                    <div className="input-group">
                        <label htmlFor="collegeNameDegree">College Name:</label>
                        <input type="text" id="collegeNameDegree" name="collegeNameDegree" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="courseName">Course Name:</label>
                        <input type="text" id="courseName" name="courseName" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="branch">Branch:</label>
                        <input type="text" id="branch" name="branch" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="yearPassingDegree">Year of Passing:</label>
                        <input type="text" id="yearPassingDegree" name="yearPassingDegree" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cgpaPercentage">CGPA / Percentage:</label>
                        <input type="text" id="cgpaPercentage" name="cgpaPercentage" />
                    </div>
                </div>

                <div className="button-container2">
                    <button className="save-edit-btn">Save & Next</button>
                    <button className="save-edit-btn">Edit</button>
                </div>
            </div>
        </div>
    );
}

export default EduDetail;
