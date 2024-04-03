import MainPage from "../pages/MainPage/MainPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import {Navigate} from "react-router-dom";

export const publicRoutes = [
    {path: "/", element: <MainPage/>},
    {path: "/product/:id", element: <ProductPage/>},
    {path: "*", element: <Navigate to="/"/>}
]

export const privateRoutes = [
    {path: "/registration", element: <RegistrationPage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "*", element: <Navigate to="/registration"/>}
]