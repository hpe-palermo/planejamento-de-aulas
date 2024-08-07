import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import '../assets/SideBar.css'

function SideBar({ active, toggleSideBar }) {
    return (
        <div className={`sidebar${active ? ' active' : ''}`} id="sidebar">
            <div onClick={toggleSideBar} className="icon-x">
                <IoMdClose color="#dddcdc" size={30} />
            </div>
            <div className="ctn-button-add" id="ctn-button-add">
                <button className="btn-add" id="btn-add">
                    <FaPlus /> <span style={{ marginLeft: '10px' }}>Adicionar Disciplina</span>
                </button>
            </div>
            <ul className="list-disciplines">
                <li>bah</li>
                <li>bah</li>
                <li>bah</li>
            </ul>
        </div>
    );
}

export default SideBar;