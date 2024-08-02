import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ContentPage from "../components/ContentPage";
import Backdrop from "../components/Backdrop";
import styled from "styled-components";

const Container = styled.div`
    height: calc(100vh - 72px);
    background-color: #d2d2d2;
`;

function Home() {

    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <>
        <NavBar active={sidebarActive} functionToggle={toggleSidebar} />
        <Container>
            <Backdrop active={sidebarActive}/>
            <SideBar active={sidebarActive} closeSideBar={toggleSidebar} />
            <ContentPage />
        </Container>
        </>
    );
}

export default Home;