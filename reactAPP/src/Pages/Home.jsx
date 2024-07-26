import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: #042937;
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
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 25% auto;
`;

const SideBar = styled.div`
    background-color: #103d55;
    height: 100vh;
    overflow-y: auto;
`;

const Content = styled.div`
    background-color: #5d97b9;
    height: 100vh;
    overflow-y: auto;
`;

const TitleSideBar = styled.h2`
    color: #fff;
    margin-left: 30px;
`;

const ButtonAddDiscipline = styled.button`
    margin-left: 30px;
    background: #042937;
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
        background: #1d5577;
        transform: scale(1.05);
    }
`;

const Discipline = styled.button`
    margin-left: 30px;
    background: #042937;
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
        background: #1d5577;
        transform: scale(1.05);
    }
`;

const disciplines = {
    '1': 'Matematica',
    '2': 'Portugues',
    '3': 'Fisica',
}

function addDiscipline(){
    alert("dsff")
}

function Home() {
    return (
        <>
        <GlobalStyle/>
        <NavBar>
            <NavBarBrand>
                <h1>Planejador de Aulas</h1>
            </NavBarBrand>
        </NavBar>
        <Container>
            <SideBar>
                <TitleSideBar>Disciplinas</TitleSideBar>
                <ButtonAddDiscipline onClick={addDiscipline}>Adicionar</ButtonAddDiscipline>
            </SideBar>
            <Content>Content</Content>
        </Container>
        </>
    )
}

export default Home;