import React from 'react';
import 'boxicons';
import './studentlist.css';
import myImage from './logo.jpeg'
import { useNavigate } from 'react-router-dom';

export const StudentList = () => {
    const navigate=useNavigate()
    const dashbord = ()=>{
        navigate('/dash')
    }
    return (
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
                        {/* <img id="logo" src={myImage} alt="Logo" style={{'width':'80px','height':'80px'}}/> */}
                    </div>


                    <div className='hv'>

                        <div className='icon1'   >
                            <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'   ></box-icon>

                        </div>
                        <p className='dash' style={{ color: "white"  }}onClick={dashbord}><button>Dashboard</button></p>
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
                        <p className='dash' style={{ color: "white" }} onClick={dashbord}>Student </p>
                    </div>

                </div>
            </section>
            <section className='sectn'>
                <section className='nevbar'>

                    <h1 className='heading' >STUDENTS LIST</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>



                <section>

                    <div>

                        <div className='jobpost'>
                            LIST OF STUDENTS
                        </div>
                <section className='leftsection'>

                        <div className='studentdata' >
                            <span>ADD STUDENTS LIST</span>
                            <div className='addlist'>
                                <form  style={{}}>
                                    <input type="file" className='file' name="filename" /><br />
                                    <input type="submit" className='fbtn' style={{ width: '250px', height: '40px' }} />
                                </form>
                            </div>
                        </div>
                </section>


                    </div>


                </section>







                {/* <section id='jobgrid'>

                <div className='jobcontainer'>
                    
                    <div className='item'>

                        <div className='card' >
                            
                        <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                               
                                <span >STUDENT PRN</span>
                                <span >STUDENT NAME</span>
                           
                        </div>

                    </div>
                    
                     <div className='item'>

                        <div className='card' >
                            
                        <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                               
                                <span >STUDENT PRN</span>
                                <span >STUDENT NAME</span>
                           
                        </div>

                    </div>
                    <div className='item'>
                    <div className='card' >
                            
                            <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                                 
                                    <span >STUDENT PRN</span>
                                    <span >STUDENT NAME</span>
                               
                            </div>
                               
                    </div>
                    <div className='item'>
                    <div className='card' >
                            
                            <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                                    
                                    <span >STUDENT PRN</span>
                                    <span >STUDENT NAME</span>
                               
                            </div>
                              
                    </div>
                    <div className='item'>
                    <div className='card' >
                            
                            <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                                    <span >STUDENT PRN</span>
                                    <span >STUDENT NAME</span>
                               
                            </div>
                               
                    </div>
                    <div className='item'>
                    <div className='card' >
                            
                            <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                                    <span >STUDENT PRN</span>
                                    <span >STUDENT NAME</span>
                               
                            </div>    
                            
                    </div>
                    <div className='item'>
                    <div className='card' >
                            
                            <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                                    <span >STUDENT PRN</span>
                                    <span >STUDENT NAME</span>
                               
                            </div>
                           
                    </div>
                    <div className='item'>
                    <div className='card' >
                            
                            <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                                    <span >STUDENT PRN</span>
                                    <span >STUDENT NAME</span>
                               
                            </div>
                    </div>
                    <div className='item'>
                    <div className='card' >
                            
                            <box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon>
                                    <span >STUDENT PRN</span>
                                    <span >STUDENT NAME</span>
                               
                            </div>
                    </div>
                </div>
            </section> */}


                {/* <form action="/action_page.php" style={{}}>
  <input type="file" name="filename" style={{marginTop:"50px"}}/><br/>
  <input type="submit" style={{width:'250px',height:'50px'}}/>
</form> */}










            </section>


        </div>
    )
}