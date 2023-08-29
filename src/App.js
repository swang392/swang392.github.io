// import logo from './logo.svg';
import './App.css';
import React from "react";
// import about
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx"

function App() {
  return (
    <div className="body">
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
