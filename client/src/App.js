import React from "react";
// import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Instructions from "./pages/Instructions";
import Storefront from "./pages/Storefront";
import Battle from "./pages/Battle";
import Loser from "./pages/Loser";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start">
          <Header />
        </div>
        <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/instructions" element={<Instructions />}></Route>
          <Route path="/store" element={<Storefront />}></Route>
          <Route path="/battle" element={<Battle />}></Route>
          <Route path="/loser" element={<Loser />}></Route>
        </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
