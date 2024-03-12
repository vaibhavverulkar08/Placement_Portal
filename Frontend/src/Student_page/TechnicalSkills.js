import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
    return (
        <div>
            <header className="header">
                <div className="logo-s">TECHNICAL & NON-TECHNICAL SKILLS</div>
                <nav className="nav">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Profile</button>
                    <button className="nav-button">Logout</button>
                </nav>
            </header>
            <div className="skills-container-wrapper">
                <div className="skills-container1">
                    <h2>Technical Skills</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Skill 1" />
                        <input type="text" placeholder="Skill 2" />
                        <input type="text" placeholder="Skill 3" />
                        <input type="text" placeholder="Skill 4" />
                        <input type="text" placeholder="Skill 5" />
                    </div>
                </div>
                <div className="skills-container2">
                    <h2>Non-Technical Skills</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Skill 1" />
                        <input type="text" placeholder="Skill 2" />
                        <input type="text" placeholder="Skill 3" />
                        <input type="text" placeholder="Skill 4" />
                        <input type="text" placeholder="Skill 5" />
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="save-edit-btn1">Save & Next</button>
                <button className="save-edit-btn2">Edit</button>
            </div>
        </div>
    );
}

export default TechnicalSkills;
