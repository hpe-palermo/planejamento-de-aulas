import React, { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
    & {
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        color: #101010;
    }

    .modal-main {
        position: fixed;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        z-index: 100;
        background-color: #d2d2d2;
        color: #101010;
    }

    .modal-content {
        background-color: #d2d2d2;
        border: none;
    }

    input, select {
        width: 280px;
    }

    select {
        padding: 5px;
        background-color: var(--tertiary-color);
        color: var(--tertiary-color);
        border-radius: 5px;
    }

    .btn-save {
        background: #101010;
        border: none;
        outline: none;
        padding: 15px;
        width: 100%;
        border-radius: 10px;
        color: #eee;
        display: flex;
        justify-content: center;
        transition: background-color 0.2s;
    }

    .btn-save:hover {
        background: #d2d2d2;
        border: 1px solid #101010;
        color: #101010;
    }

`;

function ModalAddTasks({ active, disciplines, closeModalTasks, tasks, setTasks }) {

    const [task, setTask] = useState('');
    const [discipline, setDiscipline] = useState(disciplines[0]);
    const [date, setDate] = useState('');

    const getDescription = (value) => {
        setTask(value);
    };

    const getOption = (e) => {
        setDiscipline(e.target.value);
    };

    const getDate = (value) => {
        setDate(value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Task Description:', task);
        console.log('Discipline:', discipline);
        console.log('Date:', date);
        closeModalTasks();
        setTask('');
        setDiscipline('');
        setDate('');

        let newTask = {
            task,
            discipline,
            date,
            status: 'Em Progresso'
        };
        console.log('newTask');
        console.log([...tasks, newTask])
        setTasks(tasks => [...tasks, newTask]);
    }

    return (
        <Modal className={`modal d-${active ? 'inline' : 'none'}`}>
            <div className="modal-main">
                <div className="modal-header">
                    <h3>Adicionar Tarefa</h3>
                    <div onClick={closeModalTasks} className="close-modal fs-4" id="close-modal">
                        <i className="bi-x-circle"></i>
                    </div>
                </div>
                <div className="modal-content">
                    <form onSubmit={submitForm}>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <label htmlFor="taskDescription">Descrição</label>
                            <input
                            onChange={(e) => getDescription(e.target.value)}
                            className="form-control ms-2" type="text" name="taskDescription" id="" />
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <label htmlFor="">Dsciplina</label>
                            <select onChange={getOption}>
                                {disciplines.map(discipline => (
                                    <option value={discipline.name}>{discipline.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <label htmlFor="">Data</label>
                            <input
                            onChange={(e) => getDate(e.target.value)}
                            className="form-control ms-2" type="date" name="" id="" />
                        </div>
                        <button className="btn-save" type="submit">Salvar</button>
                    </form>
                </div>
            </div>

        </Modal>
    )
}

export default ModalAddTasks;