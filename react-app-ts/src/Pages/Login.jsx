import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import '../assets/Login.css';

function Login() {

    const LoginAccepted = (e) => {
        e.preventDefault();

        alert('Login accepted');
        window.location.href = '/home';
    };

    return (
        <div className="container">
            <form onSubmit={LoginAccepted}>
                <div className="heading">
                    <h1>Login</h1>
                </div>
                <div className="container-input">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="container-input">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Senha"
                        required
                    />
                    <FaLock className="icon" />
                </div>
                <div className="container-button">
                    <button>Login</button>
                </div>
                <div className="container-button">
                    <button>
                        <img className="logo-google" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" />
                        <span>Entrar com Google</span>
                    </button>
                </div>
                <div className="container-links">
                    <a href="#">Esqueci minha senha</a>
                    <a href="/register">Crie um agora</a>
                </div>
            </form>
        </div>
    );
}

export default Login;