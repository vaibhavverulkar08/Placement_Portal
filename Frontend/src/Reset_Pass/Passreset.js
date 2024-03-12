import React from 'react'
import './Passreset.css';
import { Adminlogin } from '../Admin/AdminLogin';
import { useNavigate } from 'react-router-dom';

export const Passreset = () => {
    const navigate=useNavigate()
    const relogin = () =>
    {
       navigate('/login')
    }
        return (
        <>
            
            <header className='head' style={{ height: '100px' }}><h1 style={{ marginLeft: '50px', fontSize: '70px', marginTop: '0%' }}>JobKart</h1></header>
                <div >
            <h1 style={{ marginLeft: '475px', marginTop: '20px' }}>RESET  PASSWORD</h1>
            <div className='divr' style={{ marginTop: '0px' }}>
                    <form style={{ marginLeft: '1px', marginTop: '100px' , textAlign: 'center' }}>
                        <label  for="email" className='enter'><b>ENTER NEW PASSWORD</b></label>
                        <input type="email" id='temail' name='temail' style={{width:'250px',height:'31px' , border:'2px solid'}}/><br /><br />
                        <label for="password" className='enter'><b>CONFIRM PASSWORD</b></label>
                        <input type="text" id='tpass' name='tpass' style={{width:'250px',height:'31px', border:'2px solid'}} /><br /><br />

                        <button className='btn4' onClick={relogin}>SUBMIT</button>

                    </form></div>
            </div>



        </>
    )
}
