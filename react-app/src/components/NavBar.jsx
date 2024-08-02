import React from "react";
import styled from "styled-components";

const MenuToogle = styled.div`
    display: none;

    @media (max-width: 1023px) {
        display: inline
    }
`;

function NavBar() {
    return (
        <nav className="nav p-3 text-light w-100" style={{backgroundColor: '#101010'}}>
            <div className="container-fluid d-flex justify-content-between">
                <MenuToogle className="menu-toggle active fs-4 bg-sucess d-flex align-items-center" id="open-sidebar">
                    <i className="bi-list text-color"></i>
                </MenuToogle>
                <h1 className="navbar-brand mb-0 fs-4 text-color bg-sucess d-flex align-items-center">Planejamento de Aulas</h1>
                <div className="fs-4 text-color rounded-circle">
                    <a href="login.html" className="nav-link"><i className="bi-box-arrow-left"></i></a>
                </div>
            </div>
        </nav>)
}

export default NavBar;
