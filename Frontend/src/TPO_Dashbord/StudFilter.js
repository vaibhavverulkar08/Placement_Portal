import React from 'react';
import 'boxicons';
import './StudFilter.css';

export const StudFilter = () => {
    return (
        <>


    <section className='nevbar'>

        <h1 className='heading' >FILTER</h1>
        <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

    </section>


           <div className='jobs'>FILTER</div>

            <div className='academics container'>
                <h1>ACADEMICS</h1>
                <div className='box'>
                <h2>SSC Grades</h2>
                <select id='ssc'>
                    <option value="choose">select</option>
                    <option value="Excellent">Above 90%</option>
                    <option value="Best">Above 80%</option>
                    <option value="Better">Above 70%</option>
                    <option value="Good">Above 60%</option>
                </select>
                

                
                <h2>HSC Grades</h2>
                <select id='hsc'>
                    <option value="choose">select</option>
                    <option value="Excellent">Above 90%</option>
                    <option value="Best">Above 80%</option>
                    <option value="Better">Above 70%</option>
                    <option value="Good">Above 60%</option>
                </select>


                <h2>Diploma Grades</h2>
                <select id='diploma'>
                    <option value="choose">select</option>
                    <option value="Excellent">Above 90%</option>
                    <option value="Best">Above 80%</option>
                    <option value="Better">Above 70%</option>
                    <option value="Good">Above 60%</option>
                </select>
                

                
                <h2>Graduation Grades</h2>
                <select id='degree'>
                    <option value="choose">select</option>
                    <option value="Excellent">Above 90%</option>
                    <option value="Best">Above 80%</option>
                    <option value="Better">Above 70%</option>
                    <option value="Good">Above 60%</option>
                </select>
                </div>

                
                
            </div>


            


            <div className='branch container'>
            <h1>BRANCHES</h1> 
                <div className=' branchname'>
            
                    <input type='checkbox' id='branch' value="cs"/>CSE & IT
                    <input type='checkbox' id='branch' value="entc"/>ENTC
                    <input type='checkbox' id='branch' value="ee"/>EE
                    <input type='checkbox' id='branch' value="mech"/>MECH
                    <input type='checkbox' id='branch' value="civil"/>CIVIL
                </div>
            </div>
           





           

            <div className='skills container'>
                <h1>SKILLS</h1>
                <div className='skillname'>
            
            <input type='checkbox' id='branch' value="cpp"/>C & C++
            <input type='checkbox' id='branch' value="java"/>Java
            <input type='checkbox' id='branch' value="python"/>Python
            <input type='checkbox' id='branch' value="webdev"/>Web Development
            <input type='checkbox' id='branch' value="appdev"/>Andriod Development
            
            
        </div>
                    

                
            </div> 

            

            <button id='apply'>Apply</button>
        </>
    )
}













