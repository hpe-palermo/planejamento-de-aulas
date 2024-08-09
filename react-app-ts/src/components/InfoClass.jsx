import React from "react";
import '../assets/InfoClass.css'
import { FaAngleLeft } from "react-icons/fa";

function InfoClass() {
    return (
        <div>
            <div className="header">
                <a href="/home" className="btn-back" style={{ textDecoration: 'none' }}>
                    <FaAngleLeft /> <span>Voltar</span>
                </a>
                <h1>Aula 01</h1>
                <div>
                </div>
            </div>
        </div>
    )
}

export default InfoClass;