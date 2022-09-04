import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
