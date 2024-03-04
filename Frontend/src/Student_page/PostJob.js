import React from 'react';
import './PostJob.css';
import { Navigate, useNavigate } from 'react-router-dom';

const PostJob = () => {
    const navigate=useNavigate()
    const logout = ()=>
    {
        navigate ('/login')
    }
    const dashbord = ()=>
    {
        navigate('/studentdashbord')
    }
    return (
        <div>
            <header className="header">
                <div className="logo-s">JOB POST</div>
                <nav className="nav">
                    <button className="nav-button" onClick={dashbord}>Dashboard</button>
                    <button className="nav-button" onClick={logout}>Logout</button>
                </nav>
            </header>
            <div className='cardA-row'>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='cardA-container'>
                    <div className='cardA'>
                        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
                        <div className='locicon'>
                            <div>
                                <box-icon name='location-plus'></box-icon>
                                <span style={{ fontSize: '20px' }}> Location</span>
                            </div>
                            <br />
                            <div>
                                <box-icon name='stopwatch'></box-icon>
                                <span style={{ fontSize: '20px' }}> Full Time</span>
                            </div>
                        </div>
                        <div className='varify'>
                            <div>
                                <button className='package'>Package</button>
                            </div>
                            <br />
                            {/* <div>
                                <button className='amount'>Amount</button>
                            </div> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default PostJob;
