import React from 'react';

import './styles.css';

import logo from '../../assets/spotify-clone-app-logo-white.png';
import { urlLogin } from './constants';

function Login() {
    return (
        <div id="login">
            <div className="header">
                <div className="spotify-logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="content">
                <a
                    href={urlLogin}
                    rel="nooper noreferrer"
                >
                    <button type="button">Fazer login no Spotify</button>
                </a>
                <div className="login-info">
                    Ao clicar no botão acima você será redirecionado para a
                    página de Login do Spotify
                </div>
            </div>
        </div>
    );
}

export default Login;
