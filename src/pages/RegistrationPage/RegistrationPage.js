import React, {useContext, useEffect, useState} from 'react';
import "./RegistrationPage.css"
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const RegistrationPage = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({username: "", password: ""})
    const {isAuth, setIsAuth} = useContext(AuthContext)

    function changeBackground() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const imageURL = `https://picsum.photos/${width}/${height}?random=1`;
        document.querySelector(".register").style.backgroundImage = `url(${imageURL})`;
    }

    function register() {
        localStorage.setItem("isAuth", true)
        localStorage.setItem("credentials", JSON.stringify(credentials))
        setIsAuth(true)
        navigate("/")
    }

    useEffect(() => {
        changeBackground()
    }, []);

    return (
        <div className="register">
            <div className="container">
                <h2>Регистрация</h2>
                <form id="registrationForm">
                    <div className="input-group">
                        <label htmlFor="username">Имя пользователя:</label>
                        <input
                            value={credentials.username}
                            onChange={e => setCredentials({...credentials, username: e.target.value})}
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Пароль:</label>
                        <input
                            value={credentials.password}
                            onChange={e => setCredentials({...credentials, password: e.target.value})}
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <button onClick={register}>Зарегистрироваться</button>
                    </div>
                </form>

                <div className="login-link">
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;