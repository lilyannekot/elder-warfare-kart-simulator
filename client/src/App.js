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

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Instructions from "./pages/Instructions";
import Battle from "./pages/Battle";
import Loser from "./pages/Loser";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

// const playerCharacter = require('./classes/player');
// const enemyOne = require('./classes/enemies');
// const enemyTwo = require('./classes/enemies');
// const enemyThree = require('./classes/enemies');
// const enemyFour = require('./classes/enemies');
// const enemyFive = require('./classes/enemies');
// const enemySix = require('./classes/enemies');
// const enemySeven = require('./classes/enemies');
// const enemyEight = require('./classes/enemies');

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

  // const [HP, setHP] = useState(playerCharacter.hp);
  // const [enemyHP, setEnemyHP] = useState(enemyOne.hp);

  // let battleCount = 1

  // if (enemyHP <= 0) {
  //   battleCount += 1
  // }

  // let playerTurn = false;
  // function battleTracker() {
  //   let currentEnemy = enemyOne;
  //   if (battleCount === 2) {
  //     currentEnemy = enemyTwo;
  //   } else if (battleCount === 3) {
  //     currentEnemy = enemyThree;
  //   } else if (battleCount === 4) {
  //     currentEnemy = enemyFour;
  //   } else if (battleCount === 5) {
  //     currentEnemy = enemyFive;
  //   } else if (battleCount === 6) {
  //     currentEnemy = enemySix;
  //   } else if (battleCount === 7) {
  //     currentEnemy = enemySeven;
  //   } else {
  //     currentEnemy = enemyEight;
  //   }

  //   while (playerTurn === false) {
  //     currentEnemy.attack(playerCharacter);
  //     playerTurn = !playerTurn;
  //   }
  // }

  // battleTracker();

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
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
