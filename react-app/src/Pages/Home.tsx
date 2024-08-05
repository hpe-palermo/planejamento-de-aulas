import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ContentPage from "../components/ContentPage";
import Backdrop from "../components/Backdrop";
import ModalAddDiscipline from '../components/ModalAddDiscipline';
import styled from "styled-components";
import ModalAddTasks from "../components/ModalAddTasks";

const Container = styled.div`
    height: calc(100vh - 72px);
    background-color: #d2d2d2;
`;

const SubContainer = styled.div`
    display: flex;
`;

function Home({ modalTasksActive, toggleModalTasks, sidebarActive, toggleSidebar, toggleModal, modalDisciplineActive, disciplines, setDisciplines, tasks, setTasks }) {

    return (
        <>
            <NavBar active={sidebarActive} functionToggle={toggleSidebar} />
            <Container>
                <ModalAddDiscipline active={modalDisciplineActive} closeModal={toggleModal} disciplines={disciplines} setDisciplines={setDisciplines} />
                <Backdrop active={sidebarActive} />
                <SubContainer>
                    <SideBar active={sidebarActive} closeSideBar={toggleSidebar} addDiscipline={toggleModal} disciplines={disciplines} />
                    <ModalAddTasks active={modalTasksActive} disciplines={disciplines} closeModalTasks={toggleModalTasks} tasks={tasks} setTasks={setTasks} />
                    <ContentPage disciplines={disciplines} toggleModalTasks={toggleModalTasks} tasks={tasks} />
                </SubContainer>
            </Container>
        </>
    );
}

export default Home;