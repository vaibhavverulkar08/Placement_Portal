import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
export const Adminlogin = () => {
    const navigate=useNavigate()
    const Admin = () =>
{
    navigate('/Admindashboard')
}

    return (

        <section>

            <header className='head'><h1>JobKart</h1></header>

        <div className='formdiv'>

            <form className='form'>
                <h1></h1>
                <div className='div2'>

                </div>
                <label for="email">Username</label>
                <input type="email" id='temail' name='temail' style={{width: "70%", height: "70%"  }} /><br /><br />


                <label for="password" >Password</label><br/>
                <input type="text" id='tpass' name='tpass' style={{maxWidth:'70%', height: "70%"}} /><br/><br />

                <button className='btn' onClick={Admin}>Login</button><br/><br/><br/>
            </form>

        </div>

        </section>
    


    )
}