import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: #042937;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

// sectioin login
const Form = styled.form`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  height: 350px;
  width: 350px;
  background-color: #103d55;
  border-radius: 15px;
  animation: appears 1s ease-in-out forwards;

  @keyframes appears {
    0% {
        opacity: 0;
        transform: translateY(-25px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  }
`;

// tag h1
const TitleH1 = styled.div`
    color: #fff;
`;

const SectionData = styled.div`
    display: flex;
    flex-direction: column;
`;

// label
const Label = styled.label`
    margin-bottom: 5px;
    text-align: left;
    color: #fff;
`;

// input
const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 250px;
`;

// button login
const Button = styled.button`
  background: #042937;
  width: 270px;
  border: none;
  color: white;
  margin-bottom: 10px;
  padding: .7em 2em;
  cursor: pointer;
  font-size: 1em;
  border-radius: 10px;
  transition: .5s;

  &:hover {
    background: #1d5577;
    transform: scale(1.05);
  }
`;

// links
const Link = styled.a`
    display: block;
    margin-bottom: 5px;
    color: #009dff;
    text-decoration: none;
`;

function Login() {

    return (
        <>
            <GlobalStyle />
            <Form action='#' method='post'>
                <TitleH1>
                    <h1>Login</h1>
                </TitleH1>

                <SectionData>
                    <Label>Email:</Label>
                    <Input type="text" placeholder="Email" />
                </SectionData>
                
                <SectionData>
                    <Label>Senha:</Label>
                    <Input type="text" placeholder="Senha" />
                </SectionData>
                
                <Button>Login</Button>
                
                <Link href='#'>Esqueceu a senha?</Link>
                <Link href='/cadastro'>Criar uma conta</Link>
            </Form>
        </>
    )
}

export default Login
