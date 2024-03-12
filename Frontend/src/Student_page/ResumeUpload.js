import React from 'react';
import './ResumeUpload.css';
import { useNavigate } from 'react-router-dom';

const ResumeUpload = () => {
    const navigate= useNavigate();
    const dashbord = ()=>
    {
        navigate('/studentdashbord')
    }
    const logout = ()=>
    {
        navigate ('/login')
    }
    return (

        <div>
            <header className="header">
                <div className="logo-s">UPLOAD CV & VIDEO RESUME</div>
                <nav className="nav">
                    <button className="nav-button"onClick={dashbord}>Dashboard</button>
                    <button className="nav-button"onClick={logout}>Logout</button>
                </nav>
            </header>

            <div className="resume-upload-container">
                <div className="form-container">
                    <div className="upload-box">
                        <label>Upload PDF Resume</label>
                        <input type="file" accept=".pdf" />
                    </div>
                    <div className="upload-box">
                        <label>Upload Video Resume</label>
                        <input type="file" accept="video/*" />
                    </div>
                </div>
                <div className="button-container">
                    <button className="save-btn">Save & Next</button>
                    <button className="edit-btn">Edit</button>
                </div>
            </div>
        </div>
    );
}

export default ResumeUpload;
