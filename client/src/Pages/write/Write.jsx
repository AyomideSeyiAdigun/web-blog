import React, { useState } from 'react'
import './Write.css';
import axios from 'axios';
function Write() {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [file,setFile]=useState(null);
    

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        const header = {
            'Authorization':  sessionStorage.getItem('token')
        }
        const user = JSON.parse(sessionStorage.getItem('user'))
        const newPost = {
            username:user.username,
            title,
            desc
        }
        if (file){
            const data = new FormData();
            const filename =  Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file);
            newPost.photo = filename
            try {
                await axios.post('http://localhost:5000/api/upload/',data)
            } catch (err) {
                
            }
        }
        try {
           const res =  await axios.post('http://localhost:5000/api/posts',  newPost,{headers:header} );
            window.location.replace('/post/'+res.data._id);
            
        } catch (error) {
            
        }
    }
    return (
        <div className='write'>
            {file &&
            <img src={URL.createObjectURL(file)} alt="" />
            
            }
            <form  className="write__Form" onSubmit={handleSubmit}>
                <div className="write__FormGroup">
                    <label htmlFor="write__FileInput">
                    <i class="fa-solid fa-plus"></i>
                    </label>
                    <input type="file"  id="write__FileInput"  style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Title" className='write__Input' autoFocus={true}  onChange={(e) => setTitle(e.target.value) }/>
                </div>
                <div className="write__FormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="write__Input write__Text"  onChange={(e) => setDesc(e.target.value) }></textarea>
                </div>
                <button className="write__Submit" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
