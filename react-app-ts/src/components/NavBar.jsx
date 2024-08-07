import React from "react";
import { PiListBold } from "react-icons/pi";
import { SlLogout } from "react-icons/sl";
import '../assets/NavBar.css'

function NavBar({ toggleSideBar }) {
    return (
        <nav className="navbar">
            <div onClick={toggleSideBar} className="menu-toggle active" id="open-sidebar">
                <PiListBold size={30} />
            </div>
            <div className="navbar-brand">
                <h1>Planejamento de Aulas</h1>
            </div>
            <div className="logout">
                <a href="/" className="nav-link">
                    <SlLogout size={30} color={'#dddcdc'} />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;


