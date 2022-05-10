import React from 'react'
import Post from '../post/Post'
import { useStateValue } from '../../state/stateProvider';
import './Post.css'
function Posts() {
    const [{posts},dispatch] = useStateValue();
    return (
        <div className='posts'>
            {posts.map((p,i) =>(
                <Post post={p} key={i} />
            ))}
        </div>
    )
}

export default Posts
