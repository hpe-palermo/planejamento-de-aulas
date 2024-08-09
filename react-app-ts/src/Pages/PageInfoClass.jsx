import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ModalAddDiscipline from "../components/ModalAddDiscipline";
import InfoClass from "../components/InfoClass.jsx";
import '../assets/Home.css'

function PageInfoClass() {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [modalAddDisciplineActive, setModalAddDisciplineActive] = useState(false);

    const toggleSideBar = () => {
        setSidebarActive(!sidebarActive);
    };

    const toggleModalAddDiscipline = () => {
        setModalAddDisciplineActive(!modalAddDisciplineActive);
    };

    return (
        <div>
            <NavBar toggleSideBar={toggleSideBar} />
            <div className="content-page">
                <ModalAddDiscipline active={modalAddDisciplineActive} closeModal={toggleModalAddDiscipline} />
                <SideBar active={sidebarActive} toggleSideBar={toggleSideBar} toggleModalAddDiscipline={toggleModalAddDiscipline} />
                <div className="contents-page">
                    <InfoClass />
                </div>
            </div>
        </div>
    );
}

export default PageInfoClass;


