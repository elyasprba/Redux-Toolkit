import React from "react";

import Navbar from "./component/navbar";
import Home from "./pages/home";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
