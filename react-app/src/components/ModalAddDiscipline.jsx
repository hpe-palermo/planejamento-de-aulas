import React from "react";
import styled from "styled-components";

const Modal = styled.div`
    & {
        display: ${props => (props.active ? 'block' : 'none')};
        background-color: rgba(0, 0, 0, 0.7);
    }

    &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
    }

    .close-modal {
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
    }

    &-content {
        position: fixed;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        z-index: 100;
        background-color: var(--secondary-color);
        color: #fff;
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
        background-color: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
    }

    .day-week:hover {
        background-color: var(--tertiary-color);
    }

    .day-week.selected {
        background-color: var(--tertiary-color);
    }

    button[type="submit"]:hover {
        border: 1px solid #fff;
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

function ModalAddDiscipline({ active }) {
    return (
        <Modal className={`modal d-${active ? 'inline' : 'none'}`} id="modal">
            <div className="modal-content">
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <h3>Adicionar Disciplina</h3>
                    <div className="close-modal fs-4" id="close-modal">
                        <i className="bi-x-circle"></i>
                    </div>
                </div>
                <form>
                    <div className="input-section mb-3 d-flex">
                        <label htmlFor="name-discipline" className="form-label me-2">Nome</label>
                        <input type="text" className="form-control" id="name-discipline"
                            placeholder="Nome da Disciplina" />
                    </div>
                    <div className="input-section mb-3 d-flex">
                        <label htmlFor="hours-discipline" className="form-label me-2">CH</label>
                        <input type="number" className="form-control" id="hours-discipline" placeholder="Carga Horária" />
                    </div>
                    <div className="days-of-week d-flex justify-content-evenly mb-3">
                        <div className="day-week" data-day-week="S">S</div>
                        <div className="day-week" data-day-week="T">T</div>
                        <div className="day-week" data-day-week="Q">Q</div>
                        <div className="day-week" data-day-week="Q">Q</div>
                        <div className="day-week" data-day-week="S">S</div>
                    </div>
                    <div className="modal-footer">
                        <div className="footer-header d-flex justify-content-between">
                            <h4>Conteúdos</h4>
                            <div className="add-content fs-4" id="add-content">
                                <i className="bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                    <div className="list-contents" id="list-contents"></div>
                    <button type="submit" className="btn bg-primary-color text-color w-100 p-3">Salvar</button>
                </form>
            </div>
        </Modal>
    )
}

export default ModalAddDiscipline;