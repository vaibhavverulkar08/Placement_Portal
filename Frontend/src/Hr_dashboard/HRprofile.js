import React from 'react';
import 'boxicons';
import './hrProfile.css';


export const HRprofile = () => {
    return (
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
                        <img id="logo" src="logo.jpg" alt="Logo" />
                    </div>


                    <div className='hv'>

                        <div className='icon1'   >
                            <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'   ></box-icon>

                        </div>
                        <p className='dash' style={{ color: "white" }}>Dashboard</p>
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

                    <h1 className='heading' >Job Cart</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>
                <section >
                    <div className='headname'>

                        <div className='jobpost'>

                            <div className='text' >JOB POST</div>
                        </div>

                    </div>





                </section>
                <br />
            </section>

        </div>
    )
}
