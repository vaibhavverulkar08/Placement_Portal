import React from 'react';
import 'boxicons';
import './sidebar.css';
import { useMediaQuery } from 'react-responsive'

export const DashBoard = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
        })
        const isonBigScreen = useMediaQuery({ query: '(min-width: 100px)' })
        const isonTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
        const isonPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isonRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
        
                       </div>


                    <div className='hv'>

                        <div className='icon1'   >
                            <box-icon name='dashboard' type='solid' size='md ' rotate='90' color='#fffbfb'   ></box-icon>

                        </div>
                        <p className='dash' style={{ color: "white"}}>Dashboard</p>
                    </div>



                    <div className='icon2'>
                        <box-icon name='shopping-bag' size='lg' color='#fffbfb' ></box-icon>
                        <br />

                        <div className='cntr'>

                            <p className='job' style={{ color: "white" }}>Jobs</p>
                        </div>
                    </div>

                    <div className='std'>
                        <box-icon name='user-account' size='lg' type='solid' color='#fffbfb'></box-icon>
                        <p className='stud' style={{ color: "white" }}>Student</p>
                    </div>

                </div>
            </section>
            <section className='sectn'>
                <section className='nevbar'>

                    <h1 className='heading' >TRAINING PLACEMENT OFFICER</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>
                <section>

                    <div style={{border: '2px solid'}}>

                        <div className='jobpost'>
                           <p className='jp'> JOB POST </p>
                        </div>

                        <div className='studentdata' >
                            <p className='st'>STUDENT DATA</p>
                        </div>

                    </div>
                </section>
                <section>

                    <div className='maincard'>
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

                        

                        <div className='graph' >
                            
                          
                        </div>

                        </div>
                </section>
            </section>

        </div>
    )
}

export default DashBoard;
