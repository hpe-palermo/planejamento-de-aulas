import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import '../assets/ModalAddClasses.css';

function ModalAddClasses({ active, closeModal }) {

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [discipline, setDiscipline] = useState('Banco de Dados');
    const [typeClass, setTypeClass] = useState('');

    const getNameClassInput = (value) => {
        setName(value);
    };

    const getSubjectClassInput = (value) => {
        setSubject(value);
    };
    
    const getTypeClassInput = (value) => {
        setTypeClass(value);
    };

    const getDate = (value) => {
        setDate(value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Class Description:', name);
        console.log('Discipline:', discipline);
        console.log('Date:', date);
        console.log('Tema:', subject);
        console.log('Tipo:', typeClass);
        closeModal();
        setClasses('');
        setTypeClass('');
        setSubject('');
        setDate('');

        let newClass = {
            date: date,
            name: name,
            subject: subject,
            discipline: discipline,
            type: typeClass,
            status: 'Em Progresso'
        };

        console.log([...classes, newClass])
        setClasses(classes => [...classes, newClass]);
    }

    return (
        <div className={`modal-class${active ? ' active' : ''}`}>
            <div className="modal-main">
                <div className="modal-header">
                    <h3>Adicionar Aula</h3>
                    <div onClick={closeModal} className="close-modal" id="close-modal">
                        <IoMdClose size={30} />
                    </div>
                </div>
                <div className="modal-content">
                    <form onSubmit={submitForm}>
                        <div className="input-section">
                            <label htmlFor="nameClass">Nome</label>
                            <input
                                onChange={(e) => getNameClassInput(e.target.value)}
                                className="form-control ms-2" type="text" name="nameClass" placeholder="Nome" />
                        </div>
                        <div className="input-section">
                            <label htmlFor="nameClass">Tema</label>
                            <input
                                onChange={(e) => getSubjectClassInput(e.target.value)}
                                className="form-control ms-2" type="text" name="nameClass" placeholder="Tema" />
                        </div>
                        <div className="input-section">
                            <label htmlFor="nameClass">Tipo</label>
                            <input
                                onChange={(e) => getTypeClassInput(e.target.value)}
                                className="form-control ms-2" type="text" name="nameClass" placeholder="Tipo" />
                        </div>
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

export default ModalAddClasses;