import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Services from "./components/pages/Services";
import Contacts from "./components/pages/Contacts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
};

export default App;
