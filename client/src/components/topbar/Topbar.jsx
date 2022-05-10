import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'
function Topbar() {
    const user = false
    return (
        <div className='topbar'>
             <div className='topbar__Left'>
             <i class="fa-brands fa-facebook-square"></i>
             <i class="fa-brands fa-twitter-square"></i>
             <i class="fa-brands fa-pinterest-square"></i> 
             <i class="fa-brands fa-instagram-square"></i>  
             </div>
             <div className='topbar__Center'>
                <ul className="topbar__List">
                    <li> <Link className='link' to='/'>HOME</Link></li>
                    <li><Link className='link' to='/about'>ABOUT</Link></li>
                    <li><Link className='link' to='/contact'>CONTACT</Link></li>
                    <li><Link className='link' to='/write'>WRITE</Link></li>
                    <li><Link className='link' to='/logout'>{user && 'LOGOUT'}</Link></li>
                </ul>
             </div>
             <div className='topbar__Right'>
                 {
                     user ? (
                         <img src="https://pngimg.com/uploads/cobra/cobra_PNG27.png" alt="" />
                     ) :
                     (
                         <ul className="topbar__List">
                                <li> <Link className='link' to='/login'>LOGIN</Link></li>
                                <li><Link className='link' to='/register'>REGISTER</Link></li>
                         </ul>
                     )
                 }
                <i class="fa-solid fa-magnifying-glass"></i>
             </div>
        </div>
    )
}

export default Topbar
