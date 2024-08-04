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

    .modal-content {
        position: fixed;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        z-index: 100;
        background-color:  htmlFor=(--secondary-color);
        color: #101010;
    }

    .modal-footer {

    }

`;

function ModalAddTasks({ active, closeModalTasks }) {
    return (
        <Modal className={`modal d-${active ? 'inline' : 'none'}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Adicionar Tarefa</h3>
                    <div onClick={closeModalTasks} className="close-modal fs-4" id="close-modal">
                        <i className="bi-x-circle"></i>
                    </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                    FOOTER
                </div>
            </div>

        </Modal>
    )
}

export default ModalAddTasks;