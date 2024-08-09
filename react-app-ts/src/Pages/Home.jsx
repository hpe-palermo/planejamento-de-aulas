import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Calendar from "../components/Calendar";
import Tasks from "../components/Tasks";
import ModalAddDiscipline from "../components/ModalAddDiscipline";
import ModalAddTasks from "../components/ModalAddTasks";
import '../assets/Home.css'

function Home() {

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

    const isInDiscipline = false;

    return (
        <div>
            <NavBar toggleSideBar={toggleSideBar} />
            <div className="content-page">
                <ModalAddDiscipline active={modalAddDisciplineActive} closeModal={toggleModalAddDiscipline} />
                <SideBar active={sidebarActive} toggleSideBar={toggleSideBar} toggleModalAddDiscipline={toggleModalAddDiscipline} />
                <div className="contents-page">
                    <Calendar className="content" />
                    <ModalAddTasks isInDiscipline={isInDiscipline} active={modalAddTasksActive} closeModal={toggleModalAddTasks} />
                    <Tasks isInDiscipline={isInDiscipline} className="content" toggleModalAddTasks={toggleModalAddTasks} />
                </div>
            </div>
        </div>
    );
}

export default Home;