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

function Home() {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [modalDisciplineActive, setModalDisciplineActive] = useState(false);
    const [modalTasksActive, setModalTasksActive] = useState(true);//mudar para falso

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const toggleModal = () => {
        setModalDisciplineActive(!modalDisciplineActive);
    };

    const toggleModalTasks = () => {
        setModalTasksActive(!modalTasksActive);
    };

    const [disciplines, setDisciplines] = useState([
        'Matemática', 'Banco de Dados', 'POO', 'Django'
    ]);

    return (
        <>
            <NavBar active={sidebarActive} functionToggle={toggleSidebar} />
            <Container>
                <ModalAddDiscipline active={modalDisciplineActive} closeModal={toggleModal} setDisciplines={setDisciplines} />
                <Backdrop active={sidebarActive} />
                <SubContainer>
                    <SideBar active={sidebarActive} closeSideBar={toggleSidebar} addDiscipline={toggleModal} disciplines={disciplines} />
                    <ModalAddTasks active={modalTasksActive} closeModalTasks={toggleModalTasks} />
                    <ContentPage disciplines={disciplines} toggleModalTasks={toggleModalTasks} />
                </SubContainer>
            </Container>
        </>
    );
}

export default Home;