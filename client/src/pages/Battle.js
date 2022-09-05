import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import {
    playerCharacter,
    enemyOne,
    enemyTwo,
    enemyThree,
    enemyFour,
    enemyFive,
    enemySix,
    enemySeven,
    enemyEight
} from "../classes/index";

const Battle = (props) => {

    let battleCount = 1  
    
    const [HP, setHP] = useState(playerCharacter.hp);
    const [enemyHP, setEnemyHP] = useState(enemyOne.hp);
    

    if (enemyHP <= 0) {
        battleCount += 1
    }

    const playerTurn = false;
    function battleTracker() {
        const currentEnemy = enemyOne;
        if (battleCount == 2) {
            currentEnemy = enemyTwo;
        } else if (battleCount == 3) {
            currentEnemy = enemyThree;
        } else if (battleCount == 4) {
            currentEnemy = enemyFour;
        } else if (battleCount == 5) {
            currentEnemy = enemyFive;
        } else if (battleCount == 6) {
            currentEnemy = enemySix;
        } else if (battleCount == 7) {
            currentEnemy = enemySeven;
        } else if (battleCount == 8) {
            currentEnemy = enemyEight;
        }

        while (playerTurn == false) {
            currentEnemy.attack(playerCharacter);
            playerTurn = !playerTurn;
        }
    }

    battleTracker();

    return (
        
    );
};