import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
}
`;

// Page login
const Page = styled.div`
    background-color: #222831;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// sectioin login
const Form = styled.form`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 350px;
  background-color: #233142;
  border-radius: 15px;
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
  background: #000033;
  width: 270px;
  border: none;
  color: white;
  margin-bottom: 10px;
  padding: .7em 2em;
  cursor: pointer;
  font-size: 1em;
  border-radius: 10px;

  &:hover {
    background: #0066CC;
  }
`;

// links
const Link = styled.a`
    display: block;
    margin-bottom: 5px;
    color: #007bff;
    text-decoration: none;
`;

function Login() {

    return (
        <>
            <GlobalStyle />
            <Page>
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
                    <Link href='#'>Criar uma conta</Link>

                </Form>
            </Page>
        </>
    )
}

export default Login
