import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import "./RegistrationPage.css"

/* перенесено з чистого html, css, js */
const RegistrationPage = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({username: "", password: ""})
    const {setIsAuth} = useContext(AuthContext)

    // function changeBackground() {
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;
    //     const imageURL = `https://picsum.photos/${width}/${height}?random=1`;
    //     document.querySelector(".register").style.backgroundImage = `url(${imageURL})`;
    // }

    function register() {
        localStorage.setItem("isAuth", true)
        localStorage.setItem("credentials", JSON.stringify(credentials))
        setIsAuth(true)
        navigate("/")
    }

    // useEffect(() => {
    //     changeBackground()
    // }, []);

    return (
        <div className="register">
            <div className="container">
                <h2>Реєстрація</h2>
                <form id="registrationForm">
                    <div className="input-group">
                        <label htmlFor="username">Ім'я користувача:</label>
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
                        <button onClick={register}>Зареєструватись</button>
                    </div>
                </form>

                <div className="login-link">
                    Вже є обліковий запис? <Link to="/login">Увійти</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;