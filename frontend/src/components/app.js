import React from "react";
import "../styles/app.scss";
import Header from "./header"
import Footer from "./footer"
import LoginForm from "./loginForm"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

function App() {
    return (<BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<p>main page</p>} />
            <Route path="/login" element={<LoginForm/>} />
        </Routes>       
        <Footer/>
    </BrowserRouter>);
}

export default App;