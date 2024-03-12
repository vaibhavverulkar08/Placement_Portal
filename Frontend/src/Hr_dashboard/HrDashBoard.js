import React from 'react';
import 'boxicons';
import './hrdashboard.css';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

export const HrDashBoard = () => {
    const navigate = useNavigate();
    const createjob = () => {
        navigate('/createjob')
    }

    const publics = () => {
        navigate('/tpolist')
    }
    return (
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
                        <img id="logo" src="logo.jpg" alt="Logo" />
                    </div>


                    



                    <div className='hv'>
                        <box-icon name='layout' size='lg' color='#fffbfb' ></box-icon>
                        <br />

                        <div className='cntr'>

                            <p className='dash' style={{ color: "white" }}>Jobs</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sectn'>
                <section className='nevbar'>

                    <h1 className='heading' >HR DASHBOARD</h1>
                    <div className='profile' ><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>
                <section >
                    <div className='headname'>
                        <div className='jobpost'>
                            <div className='text' >JOB POST</div>

                        </div>
                        <div className='createjob'>
                            <button className='button' onClick={createjob}> CREATE JOB</button>

                        </div>
                    </div>
                </section>
                <br />
                <section>
                    <div className='cardmain'>
                        <div className='card' >
                            <h2 className='rolename'>ROLE NAME</h2>
                            <div className=''>
                                <div className='locaticon' >
                                    <div>
                                        <div className='locationicon'>
                                            <box-icon name='location-plus'></box-icon>
                                        </div>
                                        <div className='locationtext'>
                                            <span style={{ fontSize: '20px' }}>Location</span>
                                        </div>
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <div className='stopwatch'>
                                            <box-icon name='stopwatch'></box-icon>
                                        </div>
                                        <div className='fulltimetext'>
                                            <span style={{ fontSize: '20px' }}>Full Time</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='packagepublic'>
                                    <div className='money'>
                                        <box-icon name='money' ></box-icon>
                                    </div>
                                    <div>
                                        <span className='salary'>7 LPA  CTC</span>
                                    </div>
                                    <br />
                                    <div>
                                        <button className='Public' onClick={publics}>Public</button><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <div>
                        <div className='card' >
                            <h2 className='rolename'>ROLE NAME</h2>
                            <div className=''>

                                <div className='locaticon' >
                                    <div>
                                        <div className='locationicon'>
                                            <box-icon name='location-plus'></box-icon>
                                        </div>
                                        <div className='locationtext'>
                                            <span style={{ fontSize: '20px' }}>Location</span>
                                        </div>
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <div className='stopwatch'>
                                            <box-icon name='stopwatch'></box-icon>
                                        </div>
                                        <div className='fulltimetext'>
                                            <span style={{ fontSize: '20px' }}>Full Time</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='packagepublic'>
                                    <div className='money'>
                                        <box-icon name='money' ></box-icon>
                                    </div>
                                    <div>
                                        <span className='salary'>7 LPA  CTC</span>
                                    </div>
                                    <br />
                                    <div>
                                        <button className='Public' onClick={publics} >Public</button><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <div>
                        <div className='card' >
                            <h2 className='rolename'>ROLE NAME</h2>
                            <div className=''>

                                <div className='locaticon' >
                                    <div>
                                        <div className='locationicon'>
                                            <box-icon name='location-plus'></box-icon>
                                        </div>
                                        <div className='locationtext'>
                                            <span style={{ fontSize: '20px' }}>Location</span>
                                        </div>
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <div className='stopwatch'>
                                            <box-icon name='stopwatch'></box-icon>
                                        </div>
                                        <div className='fulltimetext'>
                                            <span style={{ fontSize: '20px' }}>Full Time</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='packagepublic'>
                                    <div className='money'>
                                        <box-icon name='money' ></box-icon>
                                    </div>
                                    <div>
                                        <span className='salary'>7 LPA  CTC</span>
                                    </div>
                                    <br />
                                    <div>
                                        <button className='Public' onClick={publics}>Public</button><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <br />


                <section>
                    <div className='cardmain'>
                        <div className='card' >
                            <h2 className='rolename'>ROLE NAME</h2>
                            <div className=''>
                                <div className='locaticon' >
                                    <div>
                                        <div className='locationicon'>
                                            <box-icon name='location-plus'></box-icon>
                                        </div>
                                        <div className='locationtext'>
                                            <span style={{ fontSize: '20px' }}>Location</span>
                                        </div>
                                        <br />
                                    </div>
                                    <br />
                                    <div>
                                        <div className='stopwatch'>
                                            <box-icon name='stopwatch'></box-icon>
                                        </div>
                                        <div className='fulltimetext'>
                                            <span style={{ fontSize: '20px' }}>Full Time</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='packagepublic'>
                                    <div className='money'>
                                        <box-icon name='money' ></box-icon>
                                    </div>
                                    <div>
                                        <span className='salary'>7 LPA  CTC</span>
                                    </div>
                                    <br />
                                    <div>
                                        <button className='Public' onClick={publics}>Public</button><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


            </section>

        </div>
    )
}

export default HrDashBoard;