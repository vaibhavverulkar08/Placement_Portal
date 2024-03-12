import React from 'react';
// import './JobPost.css'; // Corrected import statement for CSS file

export const JobPost = () => {
    return (
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
                        {/* Ensure correct box-icon usage */}
                        <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></box-icon>
                    </div>


                    <div className='hv'>

                        <div className='icon1'>
                            {/* Ensure correct box-icon usage */}
                            <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></box-icon>

                        </div>
                        <p className='dash' style={{ color: "white" }}>Dashboard</p>
                    </div>



                    <div className='hv'>
                        <box-icon name='shopping-bag' size='lg' color='#fffbfb'></box-icon>
                        <br />

                        <div className='cntr'>

                            <p className='dash' style={{ color: "white" }}>Jobs</p>
                        </div>
                    </div>

                    <div className='hv'>
                        <box-icon name='user-account' size='lg' type='solid' color='#fffbfb'></box-icon>
                        <p className='dash' style={{ color: "white" }}>Student</p>
                    </div>

                </div>
            </section>
            <section className='sectn'>
                <section className='nevbar'>

                    <h1 className='heading' >JOB POSTS</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>



                <section id='jobgrid'>


                    <div className='jobs'>
                        JOBS
                    </div>




                    <div className='jobcontainer'>

                        <div className='item'>

                            <div className='card' >
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
                                        <box-icon name='money'></box-icon>
                                    </div>

                                    <div className='ctc'>
                                        <span className='accept' style={{ fontSize: '20px' }}>7 Lpa</span><br />
                                        <span className='reject' style={{ fontSize: '20px' }}>CTC</span>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className='item'>
    <div className='card'>
        <h2 style={{ textAlign: 'center', marginTop: '12px' }}>COMPANY NAME</h2>
        <div className='locicon'>
            <div>
                <box-icon name='location-plus'></box-icon>
                <span style={{ fontSize: '20px' }}>Location</span>
            </div>
            <br />
            <div>
                <box-icon name='stopwatch'></box-icon>33
                <span style={{ fontSize: '20px' }}>Full Time</span>
            </div>
        </div>
        <div className='varify'>
            <div>
                <box-icon name='money'></box-icon>
            </div>
            <div className='ctc'>
                <span className='accept' style={{ fontSize: '20px' }}>7 Lpa</span><br />
                <span className='reject' style={{ fontSize: '20px' }}>CTC</span>
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

export default JobPost;