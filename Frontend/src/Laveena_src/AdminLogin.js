import React from 'react'
import './login.css'
import { useMediaQuery } from 'react-responsive'
export const Adminlogin = () => {

    const Admin = () =>
{

}
const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isonBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isonTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isonPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isonRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (

        <>
            <header className='head' style={{ height: '100px' }}><h1 style={{ marginLeft: '50px', fontSize: '70px', color:'white'}}>JobKart</h1></header>


            <form className='form'>
               <br/><br/><br/><br/>
                <div className='div2'>

                </div>
                <label for="email">Username</label><br />
                <input type="email" id='temail' name='temail' /><br /><br /><br/>


                <label for="password">Password</label><br/>
                <input type="text" id='tpass' name='tpass' /><br/><br /><br/>

                <button className='btn' onClick={Admin()}>Login</button><br/><br/>
            </form>


        </>


    )
}
export default Adminlogin;