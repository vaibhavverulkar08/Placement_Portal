import React from 'react';
import 'boxicons';
import './UpdateProfile.css';
import { useNavigate } from 'react-router-dom';
import EduDetail from './EduDetail';

const PersInfo = () => {
    const navigate = useNavigate();
    const dashbord = ()=>
    {
        navigate ('/studentdashbord')
    }
    const educational = () => {
        navigate('/educationaldetails');
    }

    const skills = () => {
        navigate('/skills');
    }

    const experience = () => {
        navigate('/experience');
    }
    const projects = () => {
        navigate('/projects');
    }
    const cv = () => {
        navigate('/cv');
    }

    const personal = () => {
        navigate('/personaldetails');
    };

    return (
        <div className="container">
            <header className="header">
                <div className="logo-s">STUDENT PROFILE</div>
                <nav className="nav">
                    <button className="nav-button" onClick={dashbord}>Dashboard</button>
                    <button className="nav-button">Logout</button>
                </nav>
            </header>
            <div className='sbar'>
                <div className='div1'>
                    <div className='icon'>
                        <box-icon name='user-circle' type='solid' size='70px' rotate='-90' color='#fffbfb'></box-icon>
                    </div>
                    <div className='dashCls'>
                        <p className='dash4'>UPLOAD PICTURE</p>
                        <p className='dash5'>Edit PICTURE</p>
                        <p className='dash6'>PNR NO.</p>
                        <p className='dash7'>Branch</p>
                    </div>
                </div>
            </div>
            <section className="update-profile">
                <div className='update-profile-logo'><h2>UPDATE PROFILE</h2></div>
                <div className='Details-Container'>
                    <div className='profile_button'>
                    <button onClick={personal}>Personal Details</button>
                        <button onClick={educational}>Educational Details</button>
                        <button onClick={skills}>Skills</button>
                        <button onClick={experience}>Experience/Internship</button>
                        <button onClick={projects}>Projects</button>
                        <button onClick={cv}>CV & Video Resume</button>
                    </div>
                    <div className='sub-btnn'>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PersInfo;
