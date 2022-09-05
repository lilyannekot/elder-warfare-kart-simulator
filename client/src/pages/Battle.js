import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hud from '../components/Hud/Hud';
import HPbar from '../components/BattlePage/HPbar/HPbar';
import EnemyHPbar from '../components/BattlePage/HPbar/enemyHPbar';

const Battle = ({ winCount }) => {
    const [ourHP, setHP] = useState(100 + (winCount * 5))
    const [enemyHP, setEnemyHP] = useState(100 + (winCount * 5));

    useEffect(() => {

    })
    const slap = () => {
        setEnemyHP(enemyHP-20)
        console.log(enemyHP);
    }
    
        const nap = () => {
            if (ourHP + 30 > (100 + (winCount * 5))){
                let fullhp = (100 + (winCount * 5)) - ourHP;
               setHP(ourHP + fullhp);
            } else {
                setHP(ourHP + 30);
            }
        }
    
        const runOver = () => {
            let hitChance = Math.random() * 10;
            if (hitChance > 0 && hitChance < 2.5){
                console.log(hitChance);
                setEnemyHP(enemyHP - 50);
            } else {
                console.log(hitChance);
                console.log("whoops you missed");
            }
        }

    const enemyAttack = () => {
            setHP(ourHP - 20);  
    }

    return (
       <div>
        <Hud slap={slap} nap={nap} runover={runOver}/>
        <HPbar currentHP={ourHP} maxHP={100 + (winCount * 5)}/>
        <EnemyHPbar enemyCurrentHP={enemyHP} enemyMaxHP={100 + (winCount * 5)} />
        <button onClick={enemyAttack}>End Turn?</button>
       </div>
    );
};

export default Battle;
