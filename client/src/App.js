import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Instructions from "./pages/Instructions";
import Battle from "./pages/Battle";
import Loser from "./pages/Loser";
import Header from "./components/Header/index";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  let winCount = 0;
  let haveGone = false;

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/instructions" element={<Instructions />}></Route>
            <Route
              path="/battle"
              element={<Battle winCount={winCount} haveGone={haveGone} />}
            ></Route>
            <Route path="/loser" element={<Loser />}></Route>
          </Routes>
        </div>
        <Nav justified className="bg-primary">
          <NavItem>
            <NavLink href="https://github.com/lilyannekot" target="_blank" className="text-white">
              Lily Kot
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/ltmccarthy9" target="_blank" className="text-white">
              Liam McCarthy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/pbarkley" target="_blank" className="text-white">
              Pat Barkley
            </NavLink>
          </NavItem>
        </Nav>
      </Router>
    </ApolloProvider>
  );
}
