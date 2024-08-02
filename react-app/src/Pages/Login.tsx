import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #dddcdc;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    box-shadow: 0 0 10px #000;
`;

const Button = styled.button`
    background: #101010;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    color: #eee;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
        background-color: #333333;
    }
`

const IconGoogle = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

function Login() {
    return (
        <Container>
            <form id="login-form" className="p-4 px-5 rounded-4" style={{ backgroundColor: '#d2d2d2' }}>
                <h1 className="text-center">Login</h1>
                <div className="my-3 mt-4">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Senha" required />
                </div>
                <div className="text-center mb-3">
                    <Button>Login</Button>
                </div>
                <div className="text-center mb-3">
                    <Button type="submit" className="btn-google bg-light text-dark">
                        <div className="btn-content">
                            <IconGoogle src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" /> Entrar com
                            Google
                        </div>
                    </Button>
                </div>
                <div className="mt-3 text-center text-center">
                    <a href="#" className="nav-link text-primary">Esqueci minha senha</a>
                    <a href="/register" className="nav-link text-primary">Crie um agora</a>
                </div>
            </form>
        </Container>
    );
}

export default Login;