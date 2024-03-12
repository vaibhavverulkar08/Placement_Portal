import React from 'react';
import { FaBox } from 'react-icons/fa';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from 'victory';
import './StudentDashboard.css';
import UpdateProfile from './UpdateProfile';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  
    const postjob = () =>
    {
        navigate('/studentjobpost')
    }
    const navigate = useNavigate()
    const logout = ()=>
    {
        navigate ('/login')
    }
    const update = () => {
        navigate('/updateprofile')

        // const postjob = () => {
        //     navigate('/postjob')
        // }
    }
    const data = [
        { company: "Company A", status: "Shortlisted" },
        { company: "Company B", status: "Cleared 1st round" },
        { company: "Company C", status: "Cleared 2nd round" },
        { company: "Company D", status: "3rd round selected" },
    ];
    return (
        <div className="student-dashboard">
            <header className="header">
                <div className="header-left">
                    <div className="logo">PLACEMENT PORTAL</div>
                </div>
                <div className="header-right">
                    <button className="nav-button" onClick={logout}>Logout</button>
                </div>
            </header>
            <div className="section">
                <div className="left-section">
                    <div className="box-container">
                        <h2 className='welcome-student'>Welcome Student</h2>
                        <div className="icon-container">
                            <FaBox name='user-circle' type='solid' size='70px' rotate='-90' color='black' />
                        </div>
                        <div className="tabs">
                            <button className="tab">Dashboard</button>
                            <button className="tab" onClick={update}>Update Profile</button>
                            <button className="tab" onClick={postjob} >Job Post</button> {/**/}
                            <button className="tab">Opt-Out Job</button>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div></div>
                    <div className="cardc">
                        <h2>PROGRESS GRAPH</h2>
                        <VictoryChart domainPadding={20}>
                            <VictoryAxis
                                tickValues={data.map(item => item.company)}
                                tickLabelComponent={<VictoryLabel angle={45} />}
                            />
                            <VictoryAxis
                                dependentAxis
                                tickValues={["Shortlisted", "Cleared 1st round", "Cleared 2nd round", "3rd round selected"]}
                            />
                            <VictoryBar
                                data={data}
                                x="company"
                                y="status"
                            />
                        </VictoryChart>
                    </div>
                    <div className='box'>
                        <div className='cardA-container'>
                            <div className='cardA'>
                                <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                                <div className='locicon'>
                                    <div>
                                        <div className='loc-div'>
                                            <FaBox name='location-plus' />
                                            <span style={{ fontSize: '20px' }}>  Location</span>
                                        </div>
                                        <div className='stopwatch-div'> 
                                            <FaBox name='stopwatch' />
                                            <span style={{ fontSize: '20px' }}> Full Time</span>
                                        </div>
                                    </div>
                                    <div className='varify'>
                                        <div>
                                            <button className='accept'>Apply</button>
                                        </div>
                                        {/* <br />
                                        <div>
                                            <button className='reject'>Reject</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardA-container'>
                            <div className='cardA'>
                                <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                                <div className='locicon'>
                                    <div>
                                        <div className='loc-div'>
                                            <FaBox name='location-plus' />
                                            <span style={{ fontSize: '20px' }}>  Location</span>
                                        </div>
                                        <div className='stopwatch-div'> 
                                            <FaBox name='stopwatch' />
                                            <span style={{ fontSize: '20px' }}> Full Time</span>
                                        </div>
                                    </div>
                                    <div className='varify'>
                                        <div>
                                            <button className='accept'>Apply</button>
                                        </div>
                                        {/* <br />
                                        <div>
                                            <button className='reject'>Reject</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentDashboard;
