import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../state/stateProvider';
import './Login.css';

function Login() {
    const [{isFetching,user},dispatch]=useStateValue();
    const userRef = useRef()
    const passwordRef = useRef()
    const [token,setToken] = useState({})
    const [userr,setUser] = useState({})

    const handleSubmit= async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data.user})
                sessionStorage.setItem('token',JSON.stringify(res.data.token));
                sessionStorage.setItem('user',JSON.stringify(res.data.user));
            window.location.replace('/')
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"})
        }
      
    }
 
    return (
        <div className='login'>
            <span className="login__Title">Login</span>
            <form className="login__Form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder='Enter your Username..' ref={userRef} />
                <label>Password</label>
                <input type="password" placeholder='Enter your Password..' ref={passwordRef}/>
                <button className="login__Button" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="login__RegisterButton"><Link className='link' to='/register'>Register</Link></button>
        </div>
    )
}

export default Login
