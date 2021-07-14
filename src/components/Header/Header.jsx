import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "./Menu/Menu"
import Profile from './Profile/Profile'

function Header() {
    return (
        <>
            <header>
                <Menu></Menu>
                <Link to="/"><h1>hy-games</h1></Link>
                <Profile></Profile>
            </header>
            <nav>
            </nav>
        </>
    )
}

export default Header
