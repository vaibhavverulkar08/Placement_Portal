import React from 'react';
import 'boxicons';
import './Dashboard.css';

export const Admindashboard = () => {

    const Add = () => {

    }
    return (
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
                    </div>


                    <div className='hv'>

                        <div className='icon1'   >
                            <box-icon name='plus' size='lg' color='#fffbfb' style={{ marginLeft: "8px" }}></box-icon>

                        </div>
                        <p className='dash' style={{ color: "white", textAlign: "center" }}>Add TPO</p>
                    </div>



                    <div className='hv'>
                        <box-icon name='minus' size='lg' color='#fffbfb' style={{ marginLeft: "20px" }}></box-icon>
                        <br />

                        <div className='cntr'>

                            <p className='dash' style={{ color: "white", textAlign: "center" }}>Remove TPO</p>
                        </div>
                    </div>

                    <div className='hv'>
                        <box-icon name='reset' size='lg' type='solid' color='#fffbfb' style={{ marginLeft: "20px" }}></box-icon>
                        <p className='dash' style={{ color: "white", textAlign: "center" }}>Reset Password</p>
                    </div>

                </div>
            </section>
            <section className='sectn'>
                <section className='nevbar'>

                    <h1 className='heading' >JobKart</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='60px'></box-icon></div>

                </section>
                <section>

                    <div>

                        <h1 className='h'>Registration of Training and Placement Officer</h1>
                        <form className='form1'>
                            <h1></h1><br /><br/>
                            <label for="name">Name</label><br />
                            <input type="name" id='tname' name='tname' required/><br/><br/>

                            <label for="email">Email</label><br />
                            <input type="email" id='temail' name='temail' required/><br/><br/>

                            <label for="clgname">College Name</label><br />
                            <input type="clgname" id='clgnmae' name='clgname' required/><br/><br/>

                            <label for="password">Password</label><br />
                            <input type="text" id='tpass' name='tpass' required/><br/><br/>

                            <button className='btn' onClick={Add()}>Add TPO</button><br /><br />
                        </form>
                    </div>
                </section>
            </section>

        </div >
    )
}