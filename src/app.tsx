import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Contact from './components/contact'; // sem .tsx no final
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Services />
            <Contact />
        </>
    );
};

export default App;
