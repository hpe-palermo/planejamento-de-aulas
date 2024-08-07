import React, { useState } from "react";
import '../assets/Home.css'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function Home() {

    const [sidebarActive, setSidebarActive] = useState(false);
    const toggleSideBar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <div>
            <NavBar toggleSideBar={toggleSideBar} />
            <SideBar active={sidebarActive} toggleSideBar={toggleSideBar} />
        </div>
    );
}

export default Home;