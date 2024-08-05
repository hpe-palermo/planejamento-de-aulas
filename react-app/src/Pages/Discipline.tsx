import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import ModalAddDiscipline from "../components/ModalAddDiscipline";
import Backdrop from "../components/Backdrop";
import SideBar from "../components/SideBar";
import ModalAddTasks from "../components/ModalAddTasks";
// import ModalAddTasks from "../components/ModalAddTasks";
// import ContentPage from "../components/ContentPage";

const Container = styled.div`
    height: calc(100vh - 72px);
    background-color: #d2d2d2;
`;

const SubContainer = styled.div`
    display: flex;
`;

const SectionPageDiscipline = styled.div`
    padding: 20px;
    position: relative;
    width: 100%;
    height: calc(100vh - 72px);
    overflow-y: auto;

    .header button {
        position: absolute;
        background: #101010;
        border: none;
        outline: none;
        padding: 10px;
        width: 150px;
        border-radius: 10px;
        color: #eee;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        justify-content: center;
        transition: background-color 0.2s;
    }

    @media (max-width: 768px) {
       .header button {
            width: 50px;
       }
    }

    .header h1 {
        text-align: center;
    }
`;

const ContentDiscipline = styled.div`
    padding: 20px;
    border-radius: 10px;
`;

const SectionTasks = styled.div`
    --primary-color: #101010;
    --secondary-color: #838383;
    --tertiary-color: #d2d2d2;

    & {
        background-color: var(--secondary-color);
        color: var(--tertiary-color);
        border-radius: 15px;
        border: 3px solid var(--primary-color);
    }

    .tasks-title {
        background-color: var(--primary-color);
        padding: 3px;
        text-align: center;
        border-radius: 10px 10px 0 0;
    }

    .list-tasks {
        padding: 20px;
    }

    .list-tasks-header {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        gap: 2px;
    }

    .list-tasks-header div {
        flex: 1;
        padding: 5px;
        text-align: center;
    }

    .list-tasks-header div:nth-child(1) {
        flex: 2;
    }

    .task {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        gap: 2px;
        border: 2px solid var(--primary-color);
    }

    .task div {
        background-color: var(--secondary-color);
        flex: 1;
        padding: 5px;
        text-align: center;
    }

    .task div:nth-child(1) {
        flex: 2;
    }
    
    @media (max-width: 768px) {
        
        .status-task-full {
            display: none;
        }

        .status-task-resp {
            display: flex;
            justify-content: center;
        }

        .task div {
            background-color: var(--secondary-color);
            width: 30%;
            padding: 5px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .task div:nth-child(1) {
            width: 40%;
        }
    }

    .btn-add-tasks {
        background-color: var(--primary-color);
        color: var(--tertiary-color);
        border-color: 1px solid var(--tertiary-color);
        cursor: pointer;
    }
`;

const SectionClass = styled.div`
    
    --primary-color: #101010;
    --secondary-color: #838383;
    --tertiary-color: #d2d2d2;

    & {
        background-color: var(--secondary-color);
        color: var(--tertiary-color);
        border-radius: 15px;
        border: 3px solid var(--primary-color);
    }

    .tasks-title {
        background-color: var(--primary-color);
        padding: 3px;
        text-align: center;
        border-radius: 10px 10px 0 0;
    }

    .list-tasks {
        padding: 20px;
    }

    .list-tasks-header {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        gap: 2px;
    }

    .list-tasks-header div {
        flex: 1;
        padding: 5px;
        text-align: center;
    }

    .list-tasks-header div:nth-child(1) {
        flex: 2;
    }

    .task {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        gap: 2px;
        border: 2px solid var(--primary-color);
    }

    .task div {
        background-color: var(--secondary-color);
        flex: 1;
        padding: 5px;
        text-align: center;
    }

    .task div:nth-child(1) {
        flex: 2;
    }
    
    @media (max-width: 768px) {
        
        .status-task-full {
            display: none;
        }

        .status-task-resp {
            display: flex;
            justify-content: center;
        }

        .task div {
            background-color: var(--secondary-color);
            width: 30%;
            padding: 5px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .task div:nth-child(1) {
            width: 40%;
        }
    }

    .btn-add-tasks {
        background-color: var(--primary-color);
        color: var(--tertiary-color);
        border-color: 1px solid var(--tertiary-color);
        cursor: pointer;
    }
`;


function Discipline({ disciplines, setDisciplines, tasks, setTasks, toggleModalTasks, modalTasksActive, sidebarActive, toggleSidebar, toggleModal, modalDisciplineActive }) {
    const { id } = useParams();

    if (id === undefined || isNaN(Number(id))) {
        return <div>Disciplina não encontrada</div>;
    }

    const disciplineId = parseInt(id);

    if (disciplineId < 0 || disciplineId >= disciplines.length) {
        return <div>Disciplina não encontrada</div>;
    }

    const discipline = disciplines[disciplineId];

    const [tasksFiltered, setTasksFiltered] = useState([]);
    const [optionFilter, setOptionFilter] = useState('all');

    useEffect(() => {
        let newTasks = tasks.filter(task => task.discipline === discipline.name);
        setTasksFiltered(newTasks);
    }, [optionFilter, tasks]);

    const [lessons, setlessons] = useState([
        {
            name: "Introduction to Programming",
            topic: "Fundamentals of Algorithms",
            type: "Theoretical",
            status: "Completed",
            date: "2024-08-04"
        },
        {
            name: "Data Structures",
            topic: "Lists and Stacks",
            type: "Practical",
            status: "Pending",
            date: "2024-08-05"
        },
        {
            name: "Web Development",
            topic: "HTML and CSS",
            type: "Theoretical",
            status: "In Progress",
            date: "2024-08-06"
        }
    ]);


    return (
        <>
            <NavBar active={sidebarActive} functionToggle={toggleSidebar} />
            <Container>
                <ModalAddDiscipline active={modalDisciplineActive} closeModal={toggleModal} disciplines={disciplines} setDisciplines={setDisciplines} />
                <Backdrop active={sidebarActive} />
                <SubContainer>
                    <SideBar active={sidebarActive} closeSideBar={toggleSidebar} addDiscipline={toggleModal} disciplines={disciplines} />
                    <SectionPageDiscipline>
                        <div className="header">
                            <button onClick={() => window.location.href = "/home"}>
                                <i className="bi-chevron-left"></i><span className="ms-1 d-md-inline d-none">Voltar</span></button>
                            <h1>{discipline.name}</h1>
                        </div>
                        <ContentDiscipline className="mt-4">
                            <SectionClass>
                                <div className="tasks-title">
                                    <div className="h2 p-3">Aulas</div>
                                    <div className="d-flex justify-content-end mx-5">
                                        <button onClick={toggleModalTasks} className="btn-add-tasks btn p-2 mb-3">
                                            <i className="bi-plus-circle"></i> <span className="d-md-inline d-none">Adicionar Aula</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="list-tasks">
                                    <div className="list-tasks-header">
                                        <div>Data</div>
                                        <div>Nome</div>
                                        <div>Tema</div>
                                        <div>Tipo</div>
                                        <div>Status</div>
                                    </div>
                                    <div className="tasks">
                                        {lessons.map(({ date, name, topic, type, status }) => (
                                            <div className="task">
                                                <div className="date-task">{date}</div>
                                                <div className="name-task">{name}</div>
                                                <div className="discipline-task">{topic}</div>
                                                <div className="discipline-task">{type}</div>

                                                <div className="status-task-full d-md-flex d-sm-none">
                                                    <div className={
                                                        `badge bg-${(status === "Concluído") ? "success" : (status === "Em Progresso") ? "warning" : "danger"
                                                        } text-color fs-6 d-flex justify-content-center align-items-center`
                                                    }>
                                                        {status}
                                                    </div>
                                                </div>

                                                <div className="status-task-resp d-sm-flex d-md-none">
                                                    <div className={
                                                        `badge bg-${(status === "Concluído") ? "success" : (status === "Em Progresso") ? "warning" : "danger"
                                                        } text-color fs-6 d-flex justify-content-center`
                                                    }>
                                                        <i className={
                                                            `bi-${(status === "Concluído") ? "check" : (status === "Em Progresso") ? "arrow-clockwise" : "x"}`
                                                        }></i>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SectionClass>
                            <SectionTasks className="mt-4">
                                <div className="tasks-title">
                                    <div className="h2 p-3">Tarefas</div>
                                    <div className="d-flex justify-content-end mx-5">
                                        <button onClick={toggleModalTasks} className="btn-add-tasks btn p-2 mb-3">
                                            <i className="bi-plus-circle"></i> <span className="d-md-inline d-none">Adicionar Tarefa</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="list-tasks">
                                    <div className="list-tasks-header">
                                        <div>Descrição</div>
                                        <div>Disciplina</div>
                                        <div>Data</div>
                                        <div>Status</div>
                                    </div>
                                    <div className="tasks">
                                        {tasksFiltered.map(({ task, discipline, date, status }) => (
                                            <div className="task">
                                                <div className="name-task">{task}</div>
                                                <div className="discipline-task">{discipline}</div>
                                                <div className="date-task">{date}</div>

                                                <div className="status-task-full d-md-flex d-sm-none">
                                                    <div className={
                                                        `badge bg-${(status === "Concluído") ? "success" : (status === "Em Progresso") ? "warning" : "danger"
                                                        } text-color fs-6`
                                                    }>
                                                        {status}
                                                    </div>
                                                </div>

                                                <div className="status-task-resp d-sm-flex d-md-none">
                                                    <div className={
                                                        `badge bg-${(status === "Concluído") ? "success" : (status === "Em Progresso") ? "warning" : "danger"
                                                        } text-color fs-6 d-flex justify-content-center`
                                                    }>
                                                        <i className={
                                                            `bi-${(status === "Concluído") ? "check" : (status === "Em Progresso") ? "arrow-clockwise" : "x"}`
                                                        }></i>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SectionTasks>
                        </ContentDiscipline>
                    </SectionPageDiscipline>
                    <ModalAddTasks active={modalTasksActive} disciplines={disciplines} closeModalTasks={toggleModalTasks} tasks={tasks} setTasks={setTasks} />
                </SubContainer>
            </Container>
        </>
    );
};

export default Discipline;
