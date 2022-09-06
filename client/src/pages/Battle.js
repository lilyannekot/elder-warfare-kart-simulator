import React, { useEffect, useState } from "react";
import Announcer from "../components/BattlePage/announcer";
import Wincount from "../components/BattlePage/Wincount";
import Player from "../components/BattlePage/player";

import Hud from "../components/Hud/Hud";
import HPbar from "../components/BattlePage/HPbar/HPbar";
import EnemyHPbar from "../components/BattlePage/HPbar/enemyHPbar";

const Battle = ({ winCount }) => {
  let initialHP = 100 + winCount * 5;

  const [ourHP, setHP] = useState(initialHP);
  const [enemyHP, setEnemyHP] = useState(initialHP);
  const [haveGone, setHaveGone] = useState(false);
  const [announcement, setAnnouncement] = useState("Fight!");
  const [playerWins, setPlayerWins] = useState(0);

  useEffect(() => {
    if (enemyHP < 1) {
      setAnnouncement("you won!");
      winCount = winCount + 1;
      setPlayerWins(playerWins + 1);
      setHP(initialHP);
      setEnemyHP(initialHP);
      setHaveGone(false);
    }
    if (ourHP < 1) {
      setAnnouncement("YOU LOST AHAHA");
    }
  }, [enemyHP, ourHP, winCount]);

  const slap = () => {
    if (haveGone) {
      alert("You've already gone this turn, you must end your turn.");
    } else {
      setEnemyHP(enemyHP - 20);
      setAnnouncement("You slapped them!");
    }
    setHaveGone(true);
  };

  const nap = () => {
    if (haveGone) {
      alert("You've already gone this turn, you must end your turn.");
    } else {
      if (ourHP + 30 > 100 + winCount * 5) {
        let fullhp = 100 + winCount * 5 - ourHP;
        setHP(ourHP + fullhp);
        setAnnouncement("You healed to full hp!");
      } else {
        setHP(ourHP + 30);
        setAnnouncement("You healed +30hp!");
      }
    }
    setHaveGone(true);
  };

  const runOver = () => {
    if (haveGone) {
      alert("You've already gone this turn, you must end your turn.");
    } else {
      let hitChance = Math.random() * 10;
      if (hitChance > 0 && hitChance < 2.5) {
        setAnnouncement("OHHHH! You ran them over! -50HP!");
        setEnemyHP(enemyHP - 50);
      } else {
        console.log(hitChance);
        setAnnouncement("Uh oh, you missed!");
      }
    }
    setHaveGone(true);
  };

  const enemyAttack = () => {
    if (!haveGone) {
      setAnnouncement("Enemy has already gone, it's your turn!");
    } else {
      setHP(ourHP - 20);
      setHaveGone(false);
      setAnnouncement("You just got slapped! -20hp");
    }
  };

  return (
    <div className="battle-page">
      <div className="row">
        <Wincount wins={playerWins} />
      </div>
      <div className="row" style={{ display: "flex", height: "500px" }}>
        <div className="col hud-images">
          <Hud slap={slap} nap={nap} runover={runOver} />
        </div>
        <div className="col">
          <button
            className="text-light"
            style={{ height: "20%", width: "20%", margin: "0px" }}
            onClick={enemyAttack}
          >
            End Turn
          </button>
        </div>
        <div className="player-img col">
          <Player />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <HPbar currentHP={ourHP} maxHP={100 + winCount * 5} />
          <EnemyHPbar
            enemyCurrentHP={enemyHP}
            enemyMaxHP={100 + winCount * 5}
          />
        </div>
        <div className="col">
          <Announcer announcement={announcement} />
        </div>
      </div>
    </div>
  );
};

export default Battle;
