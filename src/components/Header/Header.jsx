import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import Profile from "./Profile/Profile";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <Menu></Menu>
            <h1 className="header__title" ><Link to="/">hy-games</Link></h1>
            <Profile></Profile>
        </header>
    );
}

export default Header;
