import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import React, {useState} from "react";
import {AuthContext} from "./context/AuthContext";

function App() {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false)

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
            <div className="App">
                {isAuth && <Navbar/>}
                <AppRouter isAuth={isAuth}/>
                {isAuth && <Footer/>}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
