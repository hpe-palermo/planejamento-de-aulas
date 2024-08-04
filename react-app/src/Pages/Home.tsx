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

function Home({ disciplines, setDisciplines }) {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [modalDisciplineActive, setModalDisciplineActive] = useState(false);
    const [modalTasksActive, setModalTasksActive] = useState(false);
    const [tasks, setTasks] = useState([
        { task: 'Revisar Álgebra', discipline: 'Matemática', date: '2024-08-09', status: 'Concluído' },
        { task: 'Implementar Modelo Relacional', discipline: 'Banco de Dados', date: '2024-08-10', status: 'Pendente' },
        { task: 'Desenvolver Classe Abstrata', discipline: 'POO', date: '2024-08-11', status: 'Em Progresso' },
        { task: 'Configurar Autenticação', discipline: 'Django', date: '2024-08-12', status: 'Pendente' },
        { task: 'Resolver Exercícios de Cálculo', discipline: 'Matemática', date: '2024-08-13', status: 'Concluído' },
        { task: 'Otimizar Consultas SQL', discipline: 'Banco de Dados', date: '2024-08-14', status: 'Pendente' },
        { task: 'Implementar Herança e Polimorfismo', discipline: 'POO', date: '2024-08-15', status: 'Pendente' },
        { task: 'Desenvolver API com DRF', discipline: 'Django', date: '2024-08-16', status: 'Pendente' },
        { task: 'Estudar Geometria', discipline: 'Matemática', date: '2024-08-17', status: 'Concluído' },
        { task: 'Configurar Backup do Banco', discipline: 'Banco de Dados', date: '2024-08-18', status: 'Pendente' },
        { task: 'Aplicar Padrões de Design', discipline: 'POO', date: '2024-08-19', status: 'Em Progresso' },
        { task: 'Configurar Middleware', discipline: 'Django', date: '2024-08-20', status: 'Pendente' },
    ]);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const toggleModal = () => {
        setModalDisciplineActive(!modalDisciplineActive);
    };

    const toggleModalTasks = () => {
        setModalTasksActive(!modalTasksActive);
    };

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