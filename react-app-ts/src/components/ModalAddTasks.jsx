import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import '../assets/ModalAddTasks.css';

function ModalAddTasks({ isInDiscipline, active, closeModal }) {

    // mock data
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

    // ----------------------------------------------------------------

    const [task, setTask] = useState('');
    const [discipline, setDiscipline] = useState(isInDiscipline ? 'Banco de Dados' : disciplines[0]);
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
        closeModal();
        setTask('');
        setDiscipline('');
        setDate('');

        let newTask = {
            task,
            discipline,
            date,
            status: 'Em Progresso'
        };

        console.log([...tasks, newTask])
        setTasks(tasks => [...tasks, newTask]);
    }

    return (
        <div className={`modal-task${active ? ' active' : ''}`}>
            <div className="modal-main">
                <div className="modal-header">
                    <h3>Adicionar Tarefa</h3>
                    <div onClick={closeModal} className="close-modal" id="close-modal">
                        <IoMdClose size={30} />
                    </div>
                </div>
                <div className="modal-content">
                    <form onSubmit={submitForm}>
                        <div className="input-section">
                            <label htmlFor="taskDescription">Descrição</label>
                            <input
                                onChange={(e) => getDescription(e.target.value)}
                                className="form-control ms-2" type="text" name="taskDescription" placeholder="Descrição" />
                        </div>
                        {
                            !isInDiscipline ?
                                <div className="input-section">
                                    <label htmlFor="">Dsciplina</label>
                                    <select onChange={getOption}>
                                        {disciplines.map(discipline => (
                                            <option value={discipline.name}>{discipline.name}</option>
                                        ))}
                                    </select>
                                </div> :
                                <div></div>
                        }
                        <div className="input-section">
                            <label htmlFor="">Data</label>
                            <input
                                onChange={(e) => getDate(e.target.value)}
                                className="form-control ms-2" type="date" name="" id="" />
                        </div>
                        <button className="btn-save" type="submit">Salvar</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ModalAddTasks;