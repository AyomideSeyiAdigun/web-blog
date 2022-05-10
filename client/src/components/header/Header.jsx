import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__Title">
                <span className="header__TitleSm"> React &amp; Node</span>
                <span className="header__TitleLg">Blog</span>
            </div>
            <img src="https://pngimg.com/uploads/forest/forest_PNG47.png" alt="" />
        </div>
    )
}

export default Header
