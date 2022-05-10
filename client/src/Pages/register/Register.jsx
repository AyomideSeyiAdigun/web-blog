import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
function Register() {
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false)
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            setError(true);
            const res = await axios.post("http://localhost:5000/api/auth/register",{
                username,email,password
            }); 
            res.data && window.location.replace('/login')
        } catch (err) {
             setError(true)
        }
    }

    return (
         
        <div className='register'>
            <span className="register__Title">Register</span>
            <form className="register__Form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder='Enter your Username..' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <label>Email</label>
                <input type="text" placeholder='Enter your Email..' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password</label>
                <input type="text" placeholder='Enter your Password..' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="register__Button">Register</button>
            </form>
            <button className="register__LoginButton"><Link className='link' to='/login'>Login</Link></button>
                {error&& <span style={{color:'red',marginTop:'10px'}}>Something went Wrong!</span>}
        </div>
         
    )
}

export default Register
