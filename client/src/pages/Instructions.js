import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  function beginBattle() {
    navigate("/battle");
  }

  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <div className="instruction-boxes">
        <h4>How To Play</h4>
        <p className="instruction-p">
          The game is centered around turn based combat and purchasing items to
          boost your stats. You have HP and attack stats, your attack stat
          modifies the damage your abilities do. After combat, you are taken to
          a store page where you can choose to buy items for the next battle.
        </p>
      </div>
      <div className="instruction-boxes">
        <h4>You Have Four Abilities</h4>
        <ul>
          <li>
            <b>Slap:</b> Basic attack, high hit chance
          </li>
          <li>
            <b>Nap time:</b> Replenishes hp
          </li>
          <li>
            <b>Run-over:</b> High damage attack with low hit chance
          </li>
          <li>
            <b>Run-away:</b> Leave the battle
          </li>
        </ul>
      </div>
      <h5><i>If you lose, your account will be permanently deleted.</i></h5>
      <button onClick={handleClick} className="btn btn-danger">
        Back to Login
      </button>
      <button onClick={beginBattle} className="btn continue-button btn-danger">
        Play!
      </button>
    </div>
  );
};

export default Instructions;
