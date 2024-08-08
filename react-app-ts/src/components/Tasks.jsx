import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import '../assets/Tasks.css';

function Tasks({ toggleModalAddTasks }) {

    const [modalTasksActive, setModalTasksActive] = useState(false);
    const [modalInfoActive, setModalInfoActive] = useState(false);
    const [indexTasksModal, setIndexTaksModal] = useState(0);

    const toggleModalTasks = () => {
        setModalTasksActive(!modalTasksActive);
    };
    const [disciplines, setDisciplines] = useState([
        { name: 'Programação', creditsHours: 80, daysOfWeek: ['Terça', 'Quinta'], content: ['content 1', 'content 2', 'content 3'] },
        { name: 'Leitura', creditsHours: 40, daysOfWeek: ['Segunda', 'Quarta'], content: ['content 4', 'content 5', 'content 6'] },
        { name: 'Saúde', creditsHours: 60, daysOfWeek: ['Sexta', 'Domingo'], content: ['content 7', 'content 8', 'content 9'] },
        { name: 'Matemática', creditsHours: 60, daysOfWeek: ['Sexta', 'Domingo'], content: ['content 10', 'content 11', 'content 12'] },
        { name: 'Geografia', creditsHours: 40, daysOfWeek: ['Terça', 'Sexta'], content: ['content 13', 'content 14', 'content 15'] },
    ]);

    const [tasks, setTasks] = useState([
        { task: "Estudar JavaScript", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Ler um livro", discipline: "Leitura", status: true, date: '2024-08-21' },
        { task: "Tomar café", discipline: "Saúde", status: false, date: '2024-08-29' },
    ]);

    const [tasksFiltered, setTasksFiltered] = useState([]);
    const [optionFilter, setOptionFilter] = useState('all');

    useEffect(() => {
        if (optionFilter == "all") {
            setTasksFiltered(tasks);
        } else {
            let newTasks = tasks.filter(task => task.discipline === optionFilter);
            setTasksFiltered(newTasks);
        }
    }, [optionFilter, tasks]);

    const getOption = (e) => {
        setOptionFilter(e.target.value);
    };

    const toggleOpenModalInfo = (index) => {
        setModalInfoActive(!modalInfoActive);
        if (index !== -1) {
            setIndexTaksModal(index);
            console.log('toggle modal info');
            console.log(tasks[index]);
        }
    };

    return (
        <div className="item-content-tasks">
            <div className="tasks-title">
                <h2>Tarefas</h2>
                <div className="container-filter-add">
                    <div className="filter">
                        <span className="me-2">Disciplinas</span>
                        <select onChange={getOption}>
                            <option value="all">Todas</option>
                            {disciplines.map((discipline, index) => (
                                <option key={index} value={discipline.name}>{discipline.name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={toggleModalAddTasks} className="btn-add-tasks">
                        <i className="bi-plus-circle"></i> <span className="d-md-inline d-none">
                            <FaPlus /> <span>Adicionar Tarefa</span>
                        </span>
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
                <div className={`modal-info-back${modalInfoActive ? ' active' : ''}`}>
                    <div className="modal-info">
                        <div className="close-modal-info" onClick={() => toggleOpenModalInfo(-1)}>
                            <IoMdClose size={25} className="icon-close" />
                        </div>
                        <div className="modal-info-title">
                            <h1>Editar</h1>
                        </div>
                        <div className="modal-info-content">
                            <form>
                                <div className="input-section">
                                    <label htmlFor="taskDescription">Descrição</label>
                                    <input
                                        // onChange={(e) => getDescription(e.target.value)}
                                        className="form-control ms-2" value={tasks[indexTasksModal].task} type="text" name="taskDescription" placeholder="Descrição" />
                                </div>
                                <div className="input-section">
                                    <label htmlFor="">Dsciplina</label>
                                    <select onChange={getOption}>
                                        {disciplines.map(discipline => (
                                            discipline.name == tasks[indexTasksModal].discipline
                                            ? <option value={discipline.name} selected>{discipline.name}</option>
                                            : <option value={discipline.name}>{discipline.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="input-section">
                                    <label htmlFor="">Data</label>
                                    <input
                                        onChange={(e) => getDate(e.target.value)}
                                        className="form-control ms-2" type="date" value={tasks[indexTasksModal].date} />
                                </div>
                                <a className="btn-del" type="submit">Excluir</a>
                                <button className="btn-save-edit" type="submit">Salvar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="tasks">
                    {tasksFiltered.map(({ task, discipline, date, status }, index) => (
                        <div key={index} className="task" onClick={() => toggleOpenModalInfo(index)}>
                            <div className="name-task">{task}</div>
                            <div className="discipline-task">{discipline}</div>
                            <div className="date-task">{date}</div>

                            <div className="status-task-full">
                                <div className={`label-color-${status ? 'green' : 'red'}`}>
                                    {status ? 'Concluído' : 'Pendente'}
                                </div>
                            </div>

                            <div className="status-task-resp">
                                <div className={`label-color-${status ? 'green' : 'red'}`}>
                                    {status ? <IoMdCheckmark className="icon-status" /> : <IoMdClose className="icon-status" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks;