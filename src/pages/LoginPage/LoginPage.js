import React, {useContext, useEffect, useState} from 'react';
import "./LoginPage.css"
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Error from "../../components/UI/Error/Error";

/* перенесено з чистого html, css, js */
const LoginPage = () => {
    const navigate = useNavigate()
    const {setIsAuth} = useContext(AuthContext)
    const [error, setError] = useState("")
    const [credentials, setCredentials] = useState({username: "", password: ""})

    // function changeBackground() {
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;
    //     const imageURL = `https://picsum.photos/${width}/${height}?random=1`;
    //     document.querySelector(".login").style.backgroundImage = `url(${imageURL})`;
    // }

    function login(e) {
        e.preventDefault()
        const localStorageCredentials = JSON.parse(localStorage.getItem("credentials"))

        if(localStorageCredentials) {
            if(localStorageCredentials.username === credentials.username && localStorageCredentials.password === credentials.password) {
                localStorage.setItem("isAuth", JSON.stringify(true))
                setIsAuth(true)
                navigate("/")
                return;
            }

            setError("Невірно введені данні")
            return
        }

        setError("Не існуючий акаунт")
    }

    // useEffect(() => {
    //     changeBackground()
    // }, [])


    console.log(error)
    return (
        <div className="login">
            <div className="container_login">
                <h2>Вход</h2>
                <form id="loginForm">
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
                        <button onClick={login} >Войти</button>
                    </div>
                </form>
                <div className="register-link">
                    Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
                </div>
                {error && <Error text={error}/>}
            </div>

        </div>
    );
};

export default LoginPage;