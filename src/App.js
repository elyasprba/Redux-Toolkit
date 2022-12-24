import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Unauthorized from "./pages/errorPage";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Unauthorized />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
