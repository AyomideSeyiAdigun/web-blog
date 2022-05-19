import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import './SinglePost.css'
function SinglePost() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost]= useState({});
    const PF = "http://localhost:5000/images/";
    const header = {
        'Authorization': JSON.parse(sessionStorage.getItem('token'))
    }
    useEffect(() => {
        const getPost= async () =>{
            const res = await axios.get('http://localhost:5000/api/posts/'+path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc)
        }
        getPost(); 
    }, [path]);

    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState(" ");
    const [updateMode,setUpdateMode] =useState(false)

    const handleDelete = async ()=>{
        try {
            
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{headers:header})
            window.location.replace('/')
        } catch (err) {
            
        }
    };

    const handleUpdate = async () =>{
        try {
            console.log('hi')
            await axios.put(`http://localhost:5000/api/posts/${post._id}`,{title,desc},{headers:header})
            setUpdateMode(false)
        } catch (err) {
            
        }
    }
    return (
        <div className='singlePost'>
            <div className="singlePost__Wrapper">
                {
                    post.photo && <img src={PF+post.photo} alt="" />
                }
                {
                    updateMode ? <input type='text' value={title} autoFocus  className="singlePost__TitleInput" onChange={(e)=>setTitle(e.target.value)}/> :(
                <h1 className='singlePost__Title'>
                   {title}
                    {post.username === user?.username && (
                    <div className="singlePost__Edit">
                    <i class="fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                    <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
                    </div>
                    )}
                </h1>

                    )
                }
                <div className="singlePost__Info">
                    <span className="singlePost__Author">
                        Author:<Link className='link' to={`/?user=${post.username}`} > <strong>{post.username}</strong></Link>
                    </span>
                    <span className="singlePost__Date">
                    {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {
                    updateMode ? <textarea value={desc} className="singlePost__DescriptionInput" onChange={(e)=>setDesc(e.target.value)}  /> :(
                        <p className="singlePost__Description">{desc}</p>
                    )}
                    {
                        updateMode &&<button className="singlePost__Button" onClick={handleUpdate}>Update</button>
                    }
            </div>
        </div>
    )
}
 
export default SinglePost
