import React, { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
    & {
        /* display: ${props => (props.active ? 'block' : 'none')}; */
        background-color: rgba(0, 0, 0, 0.7);
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        color: #101010;
    }

    .close-modal {
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
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

    .input-section {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .input-section input {
        width: 300px;
    }

    .days-of-week {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 20px;
    }

    .day-week {
        aspect-ratio: 1 / 1;
        height: 35px;
        background-color: #101010;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
    }

    .day-week:hover, .day-week.selected {
        background-color: #d2d2d2;
        color: #101010;
        border-color: 1px solid #101010;
    }

    button {
        background-color: #101010;
        color: #fff;
    }

    button:hover {
        border: 1px solid #101010;
        color: #101010;
        background-color: #d2d2d2;
    }

    &-footer {
        border: none;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }

    .footer-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .add-content {
        cursor: pointer;
    }

    .list-contents {
        max-height: 80px;
        overflow-y: auto;
    }

    .content-displine {
        margin-bottom: 15px;
        display: flex;
    }
`;

function ModalAddDiscipline({ active, closeModal, disciplines, setDisciplines }) {

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
        setDisciplines(disciplines => [...disciplines, newDiscipline]);
        console.log(disciplines);
        closeModal();
    };


    return (
        <Modal className={`modal d-${active ? 'inline' : 'none'}`} id="modal">
            <div className="modal-main">
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <h3>Adicionar Disciplina</h3>
                    <div onClick={closeModal} className="close-modal fs-4" id="close-modal">
                        <i className="bi-x-circle"></i>
                    </div>
                </div>
                <form onSubmit={submitFormAddDiscipline}>
                    <div className="input-section mb-3 d-flex">
                        <label htmlFor="name-discipline" className="form-label me-2">Nome</label>
                        <input
                            onChange={(e) => { setNameDiscipline(e.target.value) }}
                            type="text" className="form-control" id="name-discipline"
                            placeholder="Nome da Disciplina" />
                    </div>
                    <div className="input-section mb-3 d-flex">
                        <label htmlFor="hours-discipline" className="form-label me-2">CH</label>
                        <input
                            onChange={(e) => { setHoursDiscipline(e.target.value) }}
                            type="number" className="form-control" id="hours-discipline" placeholder="Carga Horária" />
                    </div>
                    <div className="days-of-week d-flex justify-content-evenly mb-3">
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
        </Modal>
    )
}

export default ModalAddDiscipline;