import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";    
import '../assets/SideBar.css'

function SideBar({ active, toggleSideBar, toggleModalAddDiscipline }) {

    const [disciplines, setDisciplines] = useState([
        {name: 'Banco de Dados', creditsHours: 80, daysOfWeek: ['Terça', 'Quinta'], content: ['content 1', 'content 2', 'content 3']}
    ]);

    useEffect(() => {
        // console.log(disciplines);
        // fetch('api/disciplines')
        //    .then(response => response.json())
        //    .then(data => setDisciplines(data));
        //    .catch(error => console.error('Error:', error));
    }, [disciplines]);

    return (
        <div className={`sidebar${active ? ' active' : ''}`} id="sidebar">
            <div onClick={toggleSideBar} className="icon-x">
                <IoMdClose color="#dddcdc" size={30} />
            </div>
            <div className="ctn-button-add" id="ctn-button-add">
                <button onClick={toggleModalAddDiscipline} className="btn-add" id="btn-add">
                    <FaPlus /> <span style={{ marginLeft: '10px' }}>Adicionar Disciplina</span>
                </button>
            </div>
            <ul className="list-disciplines">
                {disciplines.map((discipline, index) => (
                    <li key={index}>
                        <a href="/disciplines/{index}">
                        {discipline.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;