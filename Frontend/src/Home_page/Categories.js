import React from 'react';
import './Categories.css'
import {useNavigate} from 'react-router-dom'

export const Categories = () => {

   const navigate=useNavigate()
   const login=() =>
   {
        navigate("/login")
   }

  return (
 
        <>   
        <header className='head1' style={{height:'100px', width:'100v'}}><h1 className='h1'>JobKart</h1></header>  
        
           <div className='div21'>
            <div className='box11'>

            </div>
            
               <div className='logobox1'>
                  <article className='logo1'></article>
               </div>
               <div>
                    <h3 style={{marginLeft:'780px'}}>Sign In</h3>
                    <span style={{marginLeft:'130px', fontSize:'20px'}}>Choose among the categories</span><br/><br/>
                    <button className='btn11' onClick={login}>TPO(COLLEGE)</button><br/><br/>
                    <button className='btn21' onClick={login}>HR(COMPANY)</button><br/><br/>
                    <button className='btn31' onClick={login}>STUDENT</button><br/><br/>

               </div>

            </div>
    </>
  )
}
