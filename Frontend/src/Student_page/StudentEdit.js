// StudentEdit.js

import React from 'react';
import 'boxicons';
import './StudentEdit.css';

export const StudentEdit = () => {
    return (
        <div className='container'>
            <div className='edit-details-strip'>
                <h1>Edit Student Details</h1>
            </div>

            <div className='main-content'>
                <section className='sbar'>
                    <div className='div1'>
                        <div className='icon'>
                            <box-icon name='user-circle' type='solid' size='lg' rotate='-90' color='#fffbfb'></box-icon>
                        </div>
                        <div className='hv'>
                            <div className='icon1'>
                                <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'></box-icon>
                            </div>
                        </div>
                        <p className='dash'>Dashboard</p>
                        <p className='dash'>Edit Picture</p>
                        <p className='dash'>PNR NO.</p>
                        <p className='dash'>Branch</p>
                    </div>
                </section>
                <section className='sectn'>
                   
                    <section>
                        <div className='card'>
                            <h2>Update Profile</h2>
                            <div className='profile_button'>
                            <section className='sectn'>
                   
                   <section>
                       <div className='cardB'>
                           <h2>Update Profile</h2>
                           <div className='profile_button'>
                               <button>Personal Details</button>
                               <button>Educational Details</button>
                               <button>Skills</button>
                               <button>Experience/Internship</button>
                               <button>Project</button>
                               <button>CV & Video Resume</button>
                               <button className='submit-button'>SUBMIT</button>
                           </div>
                       </div>
                   </section>
               </section>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default StudentEdit;
