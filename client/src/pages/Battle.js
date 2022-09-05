import React, { useState } from "react";
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

    const slap = () => {
        setEnemyHP(enemyHP-20)
    }
    
        const nap = () => {
            if (ourHP + 30 > (100 + winCount * 5)){
                let fullhp = (100 + winCount * 5) - ourHP;
                setHP(ourHP + fullhp);
            } else {
                setHP(ourHP + 30);
            }
        }
    
        const runOver = () => {
            let hitChance = Math.floor(Math.random() * 1);
            if (hitChance > 0 && hitChance < .25){
                setEnemyHP(enemyHP - 50);
            } else {
                console.log("whoops you missed");
            }
        }

    return (
       <div>
        <Hud slap={slap} nap={nap} runover={runOver}/>
        <HPbar currentHP={ourHP} maxHP={100 + (winCount * 5)}/>
        <EnemyHPbar enemyCurrentHP={enemyHP} enemyMaxHP={100 + (winCount * 5)} />
       </div>
    );
};

export default Battle;
