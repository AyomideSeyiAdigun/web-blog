import React from 'react';
import { Link } from 'react-router-dom'
import './Post.css'
function Post({post}) {
    const PF = "http://localhost:5000/images/"
    return (
        <div className='post'>
            {
                post.photo &&(
                    <img src={PF + post.photo} alt="pic" />
                )
            }
            <div className="post__Info">
                <div className="post__Categories">
                    {
                        post.categories.map((c)=>(
                            <span>{c.name}</span>
                        ))
                    }
                </div>
                <Link className='link' to={`post/${post._id}`}><span className="post__Title">{post.title}</span> </Link>
                <hr />
                <span className="post__Date">{new Date(post.createdAt).toDateString()}</span>

                <p className="post__Description">{post.desc}</p>
            </div>
        </div>
    )
}

export default Post
