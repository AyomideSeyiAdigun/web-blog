import React from 'react'
import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
function Settings() {
    return (
        <div className='settings'>
            <div className="settings__Wrapper">
                <div className="settings__Title">
                    <span className="settings__UpdateTitle"></span>
                    <span className="settings__deleteTitle"></span>
                </div>
                <form  className="settings__Form">
                    <div className="settings__ProfilePic">
                    <img src="https://pngimg.com/uploads/butterfly/butterfly_PNG998.png"  />
                    <label htmlFor="settings__FileInput">
                    <i class="fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="settings__FileInput" style={{display:'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Peenywise' />
                    <label>Email</label>
                    <input type="text" placeholder='Peenywise@gmail.com' />
                    <label>Password</label>
                    <input type="password" placeholder='*******' />
                    <button className="settings__Submit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
