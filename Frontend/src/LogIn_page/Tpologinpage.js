import React, { useState } from 'react'
import './Tpologinpage.css';
import { TPODashBoard } from '../TPO_Dashbord/TOPDashBoard';
import { useNavigate } from 'react-router-dom';

export const Tpologinpage = () => {
const[user,setUser]=useState('')
const navigate = useNavigate()
    const login = () =>
    {
        if(user.includes("T"))
        {
              navigate('/dash')
        }
        else
        {
            navigate('/reset')
        }
    }
    
    return (

        <>
            <header className='head5' style={{ height: '100px' }}><h1 style={{ marginLeft: '70px', fontSize: '70px', marginTop: '10px' }}>JobKart</h1></header>

            <div className='div25'>
                <div className='box15'>

                </div>
                <div className='logobox5'>
                </div><br />
                <div className='div35'>
                    <h3 style={{ marginLeft: '800px' }}>Sign In</h3>
                   
                    <form style={{ marginLeft: '500px',  }}>
                        <label className='l1' for="username" style={{color:'black'}} >Username</label>
                        <input type="text" name='temail' style={{maxWidth:'70%'}} value={user} onChange={(e)=>setUser(e.target.value)} />


                        <label className='l2' for="password" style={{color:'black'}}>Password</label>
                        <input type="text" id='tpass' name='tpass' style={{maxWidth:'70%'}} />
                        <a className='xyz' href="www.google.com">forgot password ?</a>

                        <button className='btn4' onClick={login}>Login</button>
                    </form>

                </div>
            </div>
        </>


    )
}
