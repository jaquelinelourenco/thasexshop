import React from 'react';
import { Routes, Route} from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { CartPage } from "../pages/CartPage"
import { LoginPage } from "../pages/LoginPage"

export default function RouterWrapp() {
    return(

        <Routes>

            <Route path='/' element={ <LoginPage /> } />

            <Route path='/home' element={ <HomePage /> } />

            <Route path='/cart' element={ <CartPage /> } />

        </Routes>

    )
}