import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import '../assets/Classes.css';

function Classes({ toggleModalAddClasses }) {

    const [modalInfoActive, setModalInfoActive] = useState(false);
    const [indexclassesModal, setIndexTaksModal] = useState(0);

    const [disciplines, setDisciplines] = useState([
        { name: 'Programação', creditsHours: 80, daysOfWeek: ['Terça', 'Quinta'], content: ['content 1', 'content 2', 'content 3'] },
        { name: 'Leitura', creditsHours: 40, daysOfWeek: ['Segunda', 'Quarta'], content: ['content 4', 'content 5', 'content 6'] },
        { name: 'Saúde', creditsHours: 60, daysOfWeek: ['Sexta', 'Domingo'], content: ['content 7', 'content 8', 'content 9'] },
        { name: 'Matemática', creditsHours: 60, daysOfWeek: ['Sexta', 'Domingo'], content: ['content 10', 'content 11', 'content 12'] },
        { name: 'Geografia', creditsHours: 40, daysOfWeek: ['Terça', 'Sexta'], content: ['content 13', 'content 14', 'content 15'] },
    ]);

    const [objclasses, setObjclasses] = useState([
        { date: '2024-08-15', name: "Aula 01", subject: 'Iniciando com git', discipline: "Programação", type: 'Prova', status: false },
        { date: '2024-08-22', name: "Aula 02", subject: 'Estudar React', discipline: "Programação", type: 'Prova', status: false },
    ]);

    const toggleOpenModalInfo = (index) => {
        setModalInfoActive(!modalInfoActive);
        if (index !== -1) {
            setIndexTaksModal(index);
            console.log('toggle modal info');
            console.log(objclasses[index]);
        }
    };

    return (
        <div className="item-content-classes">
            <div className="classes-title">
                <h2>Aulas</h2>
                <div className="container-filter-add">
                    <button onClick={toggleModalAddClasses} className="btn-add-classes">
                        <i className="bi-plus-circle"></i> <span className="d-md-inline d-none">
                            <FaPlus /> <span>Adicionar Aula</span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="list-classes">
                <div className="list-classes-header">
                    <div>Data</div>
                    <div>Nome</div>
                    <div>Tema</div>
                    <div>Disciplina</div>
                    <div>Tipo</div>
                    <div>Status</div>
                </div>
                <div className="classes">
                    {objclasses.map(({ date, name, subject, discipline, type, status }, index) => (
                        <div key={index} className="task" onClick={() => toggleOpenModalInfo(index)}>
                            <div className="date-task">{date}</div>
                            <div className="name-task">{name}</div>
                            <div className="subject-task">{subject}</div>
                            <div className="discipline-task">{discipline}</div>
                            <div className="type-task">{type}</div>

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

export default Classes;