import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ContentPage from "../components/ContentPage";

function Home() {
    return (
        <>
        <NavBar />
        <div>
            <SideBar />
            <ContentPage />
        </div>
        </>
    );
}

export default Home;