import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import './SinglePost.css'
function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost]= useState({})
    useEffect(() => {
        const getPost= async () =>{
            const res = await axios.get('http://localhost:5000/api/posts/'+path);
            setPost(res.data)
        }
        getPost(); 
    }, [path])
    return (
        <div className='singlePost'>
            <div className="singlePost__Wrapper">
                {
                    post.photo && <img src={post.photo} alt="" />
                }
                <h1 className='singlePost__Title'>
                   {post.title}
                    <div className="singlePost__Edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePost__Info">
                    <span className="singlePost__Author">
                        Author:<Link className='link' to={`/?user=${post.username}`} > <strong>{post.username}</strong></Link>
                    </span>
                    <span className="singlePost__Date">
                    {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <p className="singlePost__Description">{post.desc}</p>
            </div>
        </div>
    )
}
 
export default SinglePost
