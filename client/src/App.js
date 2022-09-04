import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { BrowserRouter as Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Instructions from "./pages/Instructions";
import Storefront from "./pages/Storefront";
import Battle from "./pages/Battle";
import Loser from "./pages/Loser";

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
