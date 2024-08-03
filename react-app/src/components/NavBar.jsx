import React from "react";
import styled from "styled-components";

const NavBarComponent = styled.nav`
    background-color: #101010;
    color: #fff;
    
    .menu-toggle {
        display: none;
    }

    @media (max-width: 1023px) {
        .menu-toggle {
            display: inline;
        }
    }
`;

function NavBar({ active, functionToggle }) {

    return (
        <NavBarComponent className="navbar p-3 w-100">
            <div className="container-fluid d-flex justify-content-between">
                <div onClick={functionToggle} className="menu-toggle active fs-4d-flex align-items-center" id="open-sidebar">
                    <i className="bi-list text-color"></i>
                </div>
                <h1 className="navbar-brand mb-0 fs-4 text-colord-flex align-items-center text-light">
                    Planejamento de Aulas
                </h1>
                <div className="fs-4 text-color rounded-circle">
                    <a href="/" className="nav-link">
                        <i className="bi-box-arrow-left"></i>
                    </a>
                </div>
            </div>
        </NavBarComponent>
    );
}

export default NavBar;
