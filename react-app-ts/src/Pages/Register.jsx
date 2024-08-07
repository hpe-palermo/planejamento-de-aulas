import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import '../assets/Register.css';

function Register() {

    const LoginAccepted = (e) => {
        e.preventDefault();

        alert('Login accepted');
        window.location.href = '/home';
    };

    return (
        <div className="container">
            <form onSubmit={LoginAccepted}>
                <div className="heading">
                    <h1>Cadastro</h1>
                </div>
                <div className="container-input">
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                        name="text"
                        placeholder="Username"
                        required
                    />
                    <FaUser className="icon" />
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
                <div className="container-input">
                    <input
                        type="password"
                        className="form-control"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Confirmar Senha"
                        required
                    />
                    <FaLock className="icon" />
                </div>
                <div className="container-button">
                    <button>Criar conta</button>
                </div>
                <div className="container-button">
                    <button>
                        <img className="logo-google" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" />
                        <span>Entrar com Google</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;