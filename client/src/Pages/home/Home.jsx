import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'
import './Home.css';
import {useStateValue} from '../../state/stateProvider'
function Home() {
    // const [posts,setPosts]=useState();
    const [{posts},dispatch]=useStateValue();
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axios.get("http://localhost:5000/api/posts"+search);
            console.log(res)
            dispatch({
                type:'ALL_POST',
                item:res.data  
              })
        }
        fetchPosts();
    }, [search])
    return (
    <>
            <Header/>
        <div className='home'>
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        <Outlet/>
    </>
    )
}

export default Home
