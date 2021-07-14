import React from 'react'
import Menu from "./Menu/Menu"
import Profile from './Profile/Profile'
function Header() {
    return (
        <>
            <header>
                <Menu></Menu>
                <h1>hy-games</h1>
                <Profile></Profile>
            </header>
            <nav>
            </nav>
        </>
    )
}

export default Header
