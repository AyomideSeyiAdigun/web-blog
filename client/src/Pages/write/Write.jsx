import React from 'react'
import './Write.css'
function Write() {
    return (
        <div className='write'>
            <img src="https://pngimg.com/uploads/butterfly/butterfly_PNG998.png" alt="" />
            <form  className="write__Form">
                <div className="write__FormGroup">
                    <label htmlFor="write__FileInput">
                    <i class="fa-solid fa-plus"></i>
                    </label>
                    <input type="file"  id="write__FileInput"  style={{display:'none'}}/>
                    <input type="text" placeholder="Title" className='write__Input' autoFocus={true}/>
                </div>
                <div className="write__FormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="write__Input write__Text"></textarea>
                </div>
                <button className="write__Submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
