import React from 'react';
import 'boxicons';
import './DashBoard.css';
import { Navigate, useNavigate } from 'react-router-dom';

export const DashBoard = () => {
    const navigate=useNavigate()
    const studentlist= ()  => 
    {
        navigate('/studentlist')
    }
    return (
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
                        <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'   ></box-icon>
                    </div>
                    <div className='hv'>

                        <div className='icon1'   >
                            <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'   ></box-icon>

                        </div>
                        <p className='dash' style={{ color: "white" }}>Dashboard</p>
                    </div>



                    <div className='hv'>
                        <box-icon name='shopping-bag' size='lg' color='#fffbfb' ></box-icon>
                        <br />

                        <div className='cntr'>

                            <p className='dash' style={{ color: "white" }}>Jobs</p>
                        </div>
                    </div>

                    <div className='hv'>
                        <box-icon name='user-account' size='lg' type='solid' color='#fffbfb'></box-icon>
                        <p className='dash' style={{ color: "white"  } } onClick={studentlist} ><button>Student</button> </p>
                    </div>

                </div>
            </section>
            <section className='sectn'>
                <section className='nevbar'>

                    <h1 className='heading' >TPO DASHBOARD</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>
                <section >

                    <div className='jobstudent'>
                        <div className='jobpost1'>

                            <div className='jobpost'>
                                JOB POST
                            </div>
                        </div>
                        <div className='studentdata1'>

                            <div className='studentdata' >
                                STUDENT DATA
                            </div>
                        </div>

                    </div>
                </section>
                <section>

                    <div>
                        <div className='card' >
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div>

                            <div className='locicon' >
                                <div>
                                    <box-icon name='location-plus'></box-icon>
                                    <span style={{ fontSize: '20px', marginRight:"90px"  }}>Location</span>
                                </div>
                                <br />
                                <div>
                                    <box-icon name='stopwatch'></box-icon>
                                    <span style={{ fontSize: '20px' }}>Full Time</span>
                                </div>
                            </div>

                            <div className='varify'>
                                <div>
                                    <button className='accept' >Accept</button>

                                </div>
                                <br />
                                <div>
                                    <button className='reject' >Reject</button>
                                </div>
                        </div>

                            </div>

                        </div>

                        <div className='card1' >
                            <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                            <div className='locicon' >
                                <div>
                                    <box-icon name='location-plus'></box-icon>
                                    <span style={{ fontSize: '20px' }}>Location</span>
                                </div>
                                <br />
                                <div>
                                    <box-icon name='stopwatch'></box-icon>
                                    <span style={{ fontSize: '20px' }}>Full Time</span>
                                </div>
                            </div>

                            <div className='varify'>
                                <div>
                                    <button className='accept' >Accept</button>

                                </div>
                                <br />
                                <div>
                                    <button className='reject' >Reject</button>
                                </div>

                            </div>

                        </div>




                        <div className='graph'>
                            <p>Graph</p>
                        </div>

                    </div>
                </section>
            </section>

        </div>
    )
}
