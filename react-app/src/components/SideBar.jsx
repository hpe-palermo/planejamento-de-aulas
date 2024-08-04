import React, { act, useState } from "react";
import styled from "styled-components";

const SideBarComponent = styled.div`
    --primary-color: #101010;
    /* --secondary-color: #838383; */
    --tertiary-color: #d2d2d2;

    height: calc(100vh - 72px);
    background-color: #101010;
    color: #e2e2e2;
    width: 320px;
    transition: .5s;

    &.active {
        position: fixed;
        transform: translateX(-100%);
    }

 
 @media (max-width: 1023px) {
        .menu-toggle {
            display: inline;
            cursor: pointer;
        }

        .title-close-btn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        .content {
            height: 100%;
            width: 100%;
        }

        & {
            height: calc(100% + 20px);
            position: fixed;
            top: 0;
            left: 0;
            transform: translateX(-400px);
            transition: transform 0.3s ease-in-out;
            z-index: ${props => (props.active ? 100 : 0)};
        }

        &.active {
            transform: translateX(0px);
        }
    }

    .ctn-button-add {
        text-align: center;
        padding: 10px;
        border-bottom: 3px solid #eee;
    }


    .ctn-button-add button {
        background-color: #eee;
        color: var(--primary-color);
        width: 100%;
        font-size: 17px;
        transition: background-color .2s;
        margin-bottom: 10px;
    }

    .ctn-button-add button:hover {
        color: #eee;
        border: 1px solid #eee;
        background-color: transparent;
    }

    .list-group {
        background-color: var(--primary-color);
    }

    .list-group-item {
        background-color: var(--primary-color);
        color: #e2e2e2;
        margin: 0;
        padding: 15px;
        font-size: 17px;
        border: none;
    }

    .list-group-item:hover {
        border-radius: 10px;
        background-color: var(--tertiary-color);
        color: #000;
    }
`;

function SideBar({ active, closeSideBar, addDiscipline, disciplines }) {

    return (
        <SideBarComponent className={`sidebar ${active ? 'active' : ''}`} id="sidebar">
            <div className="title-close-btn d-flex justify-content-between align-items-center p-3 pb-2">
                <div onClick={closeSideBar} className={`close-sidebar d-flex justify-content-end w-100 ${active ? 'd-inline' : 'd-none'}`} id="close-sidebar">
                    <i className="bi-x-circle fs-1"></i>
                </div>
            </div>
            <div className="ctn-button-add text-center" id="ctn-button-add">
                <button onClick={addDiscipline} className="btn bg-primary-color p-3">
                    <i className="bi-plus-circle"></i> Adicionar Disciplina
                </button>
            </div>
            <ul className="container p-4 list-group d-flex text-center pt-2">
                {disciplines.map((discipline, index) => (
                    <li key={index} className="list-group-item">
                        <a  className="nav-link" href={`/disciplines/${index}`}>{discipline.name}</a>
                    </li>
                )
                )}
            </ul>
        </SideBarComponent>
    )
}

export default SideBar;