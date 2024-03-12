import React from 'react';
import './EditStudent.css';
import { BoxIcon } from 'boxicons';
import './EditStudent';
const EditStudent = () => {
    return (
        <div className='edit-student-container'>
            <section className='sbar'>
                <div className='div1'>
                    <div className='icon'>
                        <BoxIcon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></BoxIcon>
                    </div>
                    <div className='hv'>
                        <div className='icon1'>
                            <BoxIcon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></BoxIcon>
                        </div>
                    </div>
                    <p className='dash' style={{ color: "white" }}>Dashboard</p>
                    <p className='dash' style={{ color: "white" }}>Edit Picture</p>
                    <p className='dash' style={{ color: "white" }}>PNR NO.</p>
                    <p className='dash' style={{ color: "white" }}>Branch</p>
                </div>
            </section>
            {/* Main Section */}
            <section className='sectn'>
                <section className='nevbar'>
                    <h1 className='heading'>Edit Student Details</h1>
                    <div className='profile'><BoxIcon type='solid' name='user' color='#000000' size='80px'></BoxIcon></div>
                </section>
                <section>
                    <div className='card1'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>Update Profile</h2>
                        <div style={{ textAlign: 'center', marginTop: '50px' }}>
                            <div className='profile_button'>
                                <button className="profile-button">Personal Details</button><br />
                                <button className="profile-button">Educational Details</button><br />
                                <button className="profile-button">Skills</button><br />
                                <button className="profile-button">Experience/Internship</button><br />
                                <button className="profile-button">Project</button><br />
                                <button className="profile-button">CV & Video Resume</button><br />
                                <button className="profile-button">SUBMIT</button><br />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default EditStudent;