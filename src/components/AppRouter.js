import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../consts/routes";

const AppRouter = ({isAuth}) => {
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route => <Route path={route.path} element={route.element} key={route.path}/>)}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => <Route path={route.path} element={route.element} key={route.path}/>)}
            </Routes>
    );
};

export default AppRouter;