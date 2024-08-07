import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import '../assets/Tasks.css';

function Tasks() {

    const [modalTasksActive, setModalTasksActive] = useState(false);

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

    return (
        <div className="item-content tasks">
            <div className="tasks-title">
                <div className="h2 p-3">Tarefas</div>
                <div className="d-flex justify-content-between mx-5">
                    <div className="filter">
                        <span className="me-2">Disciplinas</span>
                        <select onChange={getOption}>
                            <option value="all">Todas</option>
                            {disciplines.map(discipline => (
                                <option value={discipline.name}>{discipline.name}</option>
                            ))}
                        </select>
                    </div>
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

                            <div className="status-task-full">
                                <div className={`label-color-${status ? 'green' : 'red'}`}>
                                    {status ? 'Concluído' : 'Pendente'}
                                </div>
                            </div>

                            <div className="status-task-resp">
                                <div className={`label-color-${status ? 'green' : 'red'}`}>
                                    {status ? <IoMdCheckmark size={25} /> : <IoMdClose size={25} />}
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