import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import '../assets/ModalAddDiscipline.css'

function ModalAddDiscipline({ active, closeModal }) {

    const [disciplines, setDisciplines] = useState([
        {name: 'Banco de Dados', creditsHours: 80, daysOfWeek: ['Terça', 'Quinta'], content: ['content 1', 'content 2', 'content 3']}
    ]);

    const [nameDiscipline, setNameDiscipline] = useState('');
    const [hoursDiscipline, setHoursDiscipline] = useState(0);
    const [listContents, setListContents] = useState([]);
    const [days, setDays] = useState([
        { day: 'S', full: 'Segunda', state: false },
        { day: 'T', full: 'Terça', state: false },
        { day: 'Q', full: 'Quarta', state: false },
        { day: 'Q', full: 'Quinta', state: false },
        { day: 'S', full: 'Sexta', state: false }
    ]);

    const toggleDaySelected = (index) => {
        setDays(prevDays =>
            prevDays.map((item, i) =>
                i === index ? { ...item, state: !item.state } : item
            )
        );
    };

    const addContent = () => {
        let content = '';
        const newListContents = [...listContents, content];
        setListContents(newListContents);
        console.log('listContents');
        console.log(listContents);
    };

    const editContent = (index, value) => {
        setListContents(contents =>
            contents.map((item, i) =>
                i === index ? value : item
            )
        );
    };

    const deleteContent = (index) => {
        setListContents(listContents.filter((_, i) => i !== index));
    };

    const submitFormAddDiscipline = (e) => {
        e.preventDefault();
        console.log(`Name: ${nameDiscipline}`);
        console.log(`Hours: ${hoursDiscipline}`);
        console.log(`Days: ${days.filter(day => day.state).map(day => day.full)}`);
        console.log(`Contents: ${listContents.map(content => content)}`);

        let newDiscipline = {
            name: nameDiscipline,
            creditHours: hoursDiscipline,
            daysOfWeek: days.filter(day => day.state).map(day => day.full),
            contents: listContents
        };
        
        let newListDisciplines = [...disciplines, newDiscipline];
        setDisciplines(newListDisciplines);
        console.log(newListDisciplines);
        closeModal();
    };


    return (
        <div className={`modal${active ? ' active' : ''}`} id="modal">
            <div className="modal-main">
                <div className="modal-header">
                    <h3>Adicionar Disciplina</h3>
                    <div onClick={closeModal} className="close-modal" id="close-modal">
                        <IoMdClose size={25} />
                    </div>
                </div>
                <form onSubmit={submitFormAddDiscipline}>
                    <div className="input-section">
                        <label htmlFor="name-discipline" className="form-label me-2">Nome</label>
                        <input
                            onChange={(e) => { setNameDiscipline(e.target.value) }}
                            type="text" className="form-control" id="name-discipline"
                            placeholder="Nome da Disciplina" />
                    </div>
                    <div className="input-section">
                        <label htmlFor="hours-discipline" className="form-label me-2">CH</label>
                        <input
                            onChange={(e) => { setHoursDiscipline(e.target.value) }}
                            type="number" className="form-control" id="hours-discipline" placeholder="Carga Horária" />
                    </div>
                    <div className="days-of-week">
                        {days.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => toggleDaySelected(index)}
                                className={`day-week ${item.state ? 'selected' : ''}`}
                            >
                                {item.day}
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <div className="footer-header d-flex justify-content-between">
                            <h4>Conteúdos</h4>
                            <div onClick={addContent} className="add-content fs-4" id="add-content">
                                <i className="bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                    <div className="list-contents" id="list-contents">
                        {listContents.map((content, index) => (
                            <div key={index} className="content-discipline d-flex mb-3">
                                <input
                                    type="text"
                                    value={content}
                                    onChange={(e) => editContent(index, e.target.value)}
                                    id="content-discipline"
                                    className="form-control"
                                    placeholder="Conteúdo"
                                />
                                <div className="del-content fs-4 ms-2" onClick={() => deleteContent(index)}>
                                    <i className="bi-dash-circle text-danger"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="btn bg-primary-color text-color w-100 p-3">Salvar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalAddDiscipline;