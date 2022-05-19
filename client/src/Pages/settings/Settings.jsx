import React, { useState } from 'react'
import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';
import { useStateValue } from '../../state/stateProvider';
function Settings() {
    const [{user},dispatch] = useStateValue();
    const myUser = JSON.parse(sessionStorage.getItem('user'));
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [file,setFile]=useState(null);
    const [success,setSuccess]=useState(false);
    const PF = "http://localhost:5000/images/"


    
    const handleSubmit = async  (e) =>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const header = {
            'Authorization': JSON.parse(sessionStorage.getItem('token'))
        }
   
        const updateUser = {
            username,email,password,id:myUser._id
        }
        if (file){
            const data = new FormData();
            const filename =  Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file);
            updateUser.photo = filename
            try {
                await axios.put('http://localhost:5000/api/upload',data)
            } catch (err) {
                
            }
        }
        try {
           const res = await axios.put('http://localhost:5000/api/users/'+myUser._id,  updateUser,{headers:header} );
           dispatch({type:"UPDATE_SUCCESS",payload:res.data})
           setSuccess(true)
        } catch (error) {
            dispatch({type:"UPDATE_FAILURE"})
        }
    }   

    return (
        <div className='settings'>
            <div className="settings__Wrapper">
                <div className="settings__Title">
                    <span className="settings__UpdateTitle"></span>
                    <span className="settings__deleteTitle"></span>
                </div>
                <form  className="settings__Form" onSubmit={handleSubmit}>
                    <div className="settings__ProfilePic">
                    <img src={file? URL.createObjectURL(file) :PF+myUser.profilePic}  />
                    <label htmlFor="settings__FileInput">
                    <i class="fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="settings__FileInput" style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={myUser.username} onChange={e=>setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="text" placeholder={myUser.email} onChange={e=>setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder='*******' onChange={e=>setPassword(e.target.value)} />
                    <button className="settings__Submit" type="submit">Update</button>
                    {success && ( <span style={{color:'green',textAlign:'center',marginTop:'20px'}}>Profile has been updated...</span>)}
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
