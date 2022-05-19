import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../state/stateProvider';
import './Topbar.css'
function Topbar() {
    const [ {},dispatch]=useStateValue();
    const user = JSON.parse(sessionStorage.getItem('user'));
    const PF = "http://localhost:5000/images/"
    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user')
        window.location.replace('/login');
    }   
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
                    <li onClick={handleLogout}> {user && 'LOGOUT'}</li>
                </ul>
             </div>
             <div className='topbar__Right'>
                 {
                     user ? ( 
                       <Link className="link" to="/settings">  <img className="topbar__RightImg" src={PF+user.profilePic} alt="p.pic" /> </Link>
                     ):
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
