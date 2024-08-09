import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Tasks from "./Tasks";
import Classes from "./Classes";
import '../assets/Discipline.css';
import ModalAddTasks from "./ModalAddTasks";

function ContainerDiscipline() {

    const [modalAddTasksActive, setModalAddTasksActive] = useState(false);

    const toggleModalAddTasks = () => {
        setModalAddTasksActive(!modalAddTasksActive);
    };

    const isInDiscipline = true;

    return (
        <div>
            <div className="header">
                <a href="/home" className="btn-back" style={{textDecoration: 'none'}}>
                    <FaAngleLeft /> <span>Voltar</span>
                </a>
                <h1>Banco de Dados</h1>
                <div></div>
            </div>
            <div className="main">
                <Classes />
                <ModalAddTasks isInDiscipline={isInDiscipline} active={modalAddTasksActive} closeModal={toggleModalAddTasks} />
                <Tasks isInDiscipline={isInDiscipline} className="content" toggleModalAddTasks={toggleModalAddTasks} />
            </div>
        </div>
    );

}

export default ContainerDiscipline;