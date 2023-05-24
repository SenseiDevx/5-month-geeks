import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./Components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import WorksPage from "./pages/WorksPage/WorksPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";

function App() {
return <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/works" element={<WorksPage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
</>
}

export default App;