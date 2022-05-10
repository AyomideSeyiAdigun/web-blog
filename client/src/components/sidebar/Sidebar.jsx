import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'
function Sidebar() {
    const [cats,setCats]=useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get('http://localhost:5000/api/categories');
            setCats(res.data);
        }
        getCats();
    },[])
    return (
        <div className='sidebar'>
            <div className="sidebar__Item">
                <span>ABOUT ME</span>
                <img src="https://pngimg.com/uploads/cobra/cobra_PNG27.png" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repudiandae veniam necessitatibus totam aperiam excepturi alias</p>
            </div>

            <div className="sidebar__Item">
                <span>CATEGORIES</span>
                <ul>
                    {
                        cats.map(c =>(
                           <Link className='link' to={`/?cat=${c.name}`}> <li>{c.name}</li></Link>
                        ))
                    }
                   
                </ul>
            </div>

            <div className="sidebar__Item">
                <span>FOLLOW US</span>
                <div className="sidebar__Social">
                <i class="fa-brands fa-facebook-square"></i>
                <i class="fa-brands fa-twitter-square"></i>
                <i class="fa-brands fa-pinterest-square"></i> 
                <i class="fa-brands fa-instagram-square"></i>  
                </div>
            </div>
        </div>
    )
}

export default Sidebar
