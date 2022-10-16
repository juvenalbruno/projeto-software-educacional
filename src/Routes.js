import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './pages/components/Header';
import { Home } from "./pages/Home";
import { ModuleQuestions } from "./pages/ModuleQuestions";

export default function Routers(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact  element={ <Home /> }  />
                <Route path="/module" element={ <ModuleQuestions /> } />
            </Routes>
        </BrowserRouter>
    );
}