import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }
    return (
        <nav>
            <img src='/images/logo.svg' className='logo'></img>
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
                <a>Blog</a>
                <a>Careers</a>
            </div>
            <button className='invite-btn'>Request Invite</button>
            <div className={`nav-items-bg ${isOpen ? "opened" : ""}`}></div>
            <img className='menu-btn' onClick={toggleIsOpen} src={`/images/icon-${isOpen ? "close" : "hamburger"}.svg`}></img>
        </nav>
    )
}