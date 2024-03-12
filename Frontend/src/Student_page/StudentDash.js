// StudentEdit.js

import React from 'react';
import 'boxicons';
import './StudentEdit.css'; // Import the external CSS file

export const StudentEdit = () => {
    return (
        <div className='maindiv'>
            {/* Sidebar section */}
            <section className='sbar'>
                <div className='div1'>
                    {/* Updated profile icon */}
                    <div className='profile-logo'>
                        <box-icon name='user-circle' type='solid' size='lg' color='#fffbfb'></box-icon>
                    </div>
                    {/* Sidebar items */}
                    <div className='icon'>
                        <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></box-icon>
                    </div>
                    <div className='hv'>
                        <div className='icon1'>
                            <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></box-icon>
                        </div>
                    </div>
                    {/* Sidebar item names */}
                    <p className='dash'>Update Profile</p>
                    <p className='dash'>PRN NO.</p>
                    <p className='dash'>Name</p>
                    <p className='dash'>Branch</p>
                </div>
            </section>
            {/* Main content section */}
            <section className='sectn'>
                <section className='nevbar'>
                    {/* Header */}
                    <h1 className='heading'>Edit Student Details</h1>
                    {/* Profile icon */}
                    <div className='profile'>
                        <box-icon type='solid' name='user' color='#000000' size='80px'></box-icon>
                    </div>
                </section>
                <section>
                    {/* Profile update options */}
                    <div className='card1'>
                        <div className='update-profile'>
                            <h2>Update Profile</h2>
                            {/* Buttons for profile update options */}
                            <div className='profile_button'>
                                <button className='other-button'>Personal Details</button>
                                <button className='other-button'>Educational Details</button>
                                <button className='other-button'>Skills</button>
                                <button className='other-button'>Experience/Internship</button>
                                <button className='other-button'>Project</button>
                                <button className='other-button'>CV & Video Resume</button>
                                <button className='submit-button'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default StudentEdit;
