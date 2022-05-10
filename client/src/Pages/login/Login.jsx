import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
    return (
        <div className='login'>
            <span className="login__Title">Login</span>
            <div className="login__Form">
                <label>Email</label>
                <input type="text" placeholder='Enter your Email..' />
                <label>Password</label>
                <input type="password" placeholder='Enter your Password..' />
                <button className="login__Button"><Link className='link' to='/login'>Login</Link></button>
            </div>
            <button className="login__RegisterButton"><Link className='link' to='/register'>Register</Link></button>
        </div>
    )
}

export default Login
