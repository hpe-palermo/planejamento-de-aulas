import React from "react";
import styled from "styled-components";

const MenuToogle = styled.div`
    display: none;
`;

function NavBar() {
    return (
        <nav className="nav p-3 text-light" style={{backgroundColor: '#101010'}}>
            <div className="container-fluid">
                <MenuToogle className="menu-toggle active fs-4" id="open-sidebar">
                    <i className="bi-list text-color"></i>
                </MenuToogle>
                <h1 className="navbar-brand mb-0 fs-4 text-color">Planejamento de Aulas</h1>
                <div className="fs-4 text-color rounded-circle">
                    <a href="login.html" className="nav-link"><i className="bi-box-arrow-left"></i></a>
                </div>
            </div>
        </nav>)
}

export default NavBar;