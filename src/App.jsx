import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />}></Route>
      </Routes>
    </>
  );
};

export default App;
