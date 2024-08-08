import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ModalAddDiscipline from "../components/ModalAddDiscipline";
import SideBar from "../components/SideBar";
import ContainerDiscipline from "../components/ContainerDiscipline";
import '../assets/PageDiscipline.css';

function PageDiscipline() {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [modalAddDisciplineActive, setModalAddDisciplineActive] = useState(false);
    const [modalAddTasksActive, setModalAddTasksActive] = useState(false);

    const toggleModalAddTasks = () => {
        setModalAddTasksActive(!modalAddTasksActive);
    };

    const toggleSideBar = () => {
        setSidebarActive(!sidebarActive);
    };

    const toggleModalAddDiscipline = () => {
        setModalAddDisciplineActive(!modalAddDisciplineActive);
    };

    return (
        <div>
            <NavBar toggleSideBar={toggleSideBar} />
            <div className="content-page">
                <ModalAddDiscipline active={modalAddDisciplineActive} closeModal={toggleModalAddDiscipline} />
                <SideBar active={sidebarActive} toggleSideBar={toggleSideBar} toggleModalAddDiscipline={toggleModalAddDiscipline} />
                <div className="contents-page">
                    <ContainerDiscipline className="content" />
                </div>
                </div>
        </div>
    );
}

export default PageDiscipline;