import React from 'react';
import {BrowserRouter as Routes, Route, Router} from "react-router-dom"
import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"
import LoginPage from "../pages/LoginPage"

export const RouterWrapp = () => {
    return(
        <Router>
            <Routes>
                <Route path='../pages/LoginPage.js'>
                    element={ <LoginPage /> }
                </Route>

                <Route path='../pages/HomePage.js'>
                    element={ <HomePage /> }
                </Route>

                <Route path='../pages/CartPage.js'>
                    element={ <CartPage /> }
                </Route>
                <Route>
                    "Erro 404 - Página não existe!"
                </Route>
            </Routes>
        </Router>
    )
}