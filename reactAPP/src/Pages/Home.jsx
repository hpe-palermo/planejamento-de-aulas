import React, { useState } from 'react'
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

    @media (max-width: 820px) {
        position: relative;
        left: 20px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 25% auto;
`;

const SideBar = styled.div`
    background-color: #103d55;
    height: 100vh;
    display: inline;

    @media (max-width: 820px) {
        display: none;
    }
`;

const Content = styled.div`
    background-color: #5d97b9;
    height: 100vh;

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

    /* @media (min-width: 800px) {
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
    } */
`;

const IconHamburguer = styled.button`
    border: none;
    outline: none;
    background-color: #042937;
    display: none;

    @media (max-width: 820px) {
        display: inline;
        font-size: 40px;
        position: fixed;
        left: 12px;
        top: 12px;
    }
`;

const disciplines = {
    '1': 'Matematica',
    '2': 'Portugues',
    '3': 'Fisica',
}

function addDiscipline(){
    // adicionar '4': 'Quimica'
}

function Home() {

    const [appearsSideBar, setAppearsSideBar] = useState(false);
    // const [classAppearsSideBar, setClassAppearsSideBar] = useState('.appears');
    // const [classToggleSideBar, setClassToggleSideBar] = useState('.appears');

    function toggle_sidebar() {
        console.log(appearsSideBar)
        
        // if (appearsSideBar) {
            // setClassAppearsSideBar('.hideen')
            // setClassToggleSideBar('none')
        // } else {
            // setClassAppearsSideBar('.appears')
            // setClassToggleSideBar('inline')
        // }

        setAppearsSideBar(!appearsSideBar)
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
            <SideBar>
                <TitleSideBar>Disciplinas</TitleSideBar>
                <ButtonAddDiscipline onClick={addDiscipline}>Adicionar</ButtonAddDiscipline>
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