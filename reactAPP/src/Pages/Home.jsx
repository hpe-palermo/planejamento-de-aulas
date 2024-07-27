import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        background-color: #042937;
    }

    .appears {
        display: inline
    }

    .hidden {
        display: none
    }
`;

const NavBar = styled.nav`
    background-color: #042937;
    margin: 0;
    padding: 0px;
    color: #fff;
    display: flex;
    justify-content: space-between;
`;

const NavBarBrand = styled.div`
    margin-left: 50px;

    @media (max-width: 820px) {
        position: relative;
        left: 20px;
        display: inline;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: stretch;
`;

const SideBar = styled.div`
    background-color: #103d55;
    display: inline;
    z-index: 1;
    width: 350px;
    height: 100vh;

    @media (max-width: 820px) {
        display: none;
    }
`;

const Content = styled.div`
    background-color: #5d97b9;
    height: 100vh;
    width: calc(100vw - 350px);

    @media (max-width: 820px) {
        width: 100vw;
    }
`;

const TitleSideBar = styled.h2`
    color: #fff;
    margin-left: 30px;
`;

const ButtonAddDiscipline = styled.button`
    margin-left: 30px;
    background: #08662f;
    width: 270px;
    border: none;
    color: white;
    margin-bottom: 10px;
    padding: 11px 32px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 10px;
    transition: .5s;

    &:hover {
        background: #12743b;
        transform: scale(1.05);
    }
`;

const ItemDiscipline = styled.div`
    margin-left: 30px;
    background: #042937;
    width: 200px;
    border: none;
    color: white;
    margin-bottom: 10px;
    padding: 15px 35px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 10px;
    text-align: center;
`;

const IconHamburguer = styled.button`
    border: none;
    outline: none;
    background-color: #042937;
    display: none;

    @media (max-width: 820px) {
        font-size: 40px;
        position: fixed;
        top: 10px;
        left: 10px;
        display: inline;
    }
`;

const disciplines = {
    '1': 'Matematica',
    '2': 'Portugues',
    '3': 'Fisica',
}

function add_discipline(){
    // adicionar '4': 'Quimica'
}

function Home() {

    const [visibleSideBar, setVisibleSideBar] = useState(true);
    const [classSideBar, setClassSideBar] = useState(true);

    function toggle_sidebar() {
        if (visibleSideBar) {
            setClassSideBar('appears')
        } else {
            setClassSideBar('hidden')
        }
        
        setVisibleSideBar(!visibleSideBar)
    }
    
    return (
        <>
        <GlobalStyle/>
        <NavBar>
            <NavBarBrand>
                <h1>Planejador de Aulas</h1>
            </NavBarBrand>
        </NavBar>
        <Container>
            <SideBar className={classSideBar}>
                <TitleSideBar>Disciplinas</TitleSideBar>
                <ButtonAddDiscipline onClick={add_discipline}>Adicionar</ButtonAddDiscipline>
                {Object.entries(disciplines).map(([id, name]) => (
                        <ItemDiscipline className='item-disciline' key={id}>{name}</ItemDiscipline>
                    ))}
            </SideBar>
            <Content>
                Content
                    <IconHamburguer onClick={toggle_sidebar}>
                        <i class="bi bi-list"></i>
                    </IconHamburguer>
            </Content>
           
        </Container>
        </>
    )
}

export default Home;