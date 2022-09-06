
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Announcer from "../components/BattlePage/announcer";
import Wincount from "../components/BattlePage/Wincount";

import Hud from '../components/Hud/Hud';
import HPbar from '../components/BattlePage/HPbar/HPbar';
import EnemyHPbar from '../components/BattlePage/HPbar/enemyHPbar';

const Battle = ({ winCount }) => {
    const [ourHP, setHP] = useState(100 + (winCount * 5))
    const [enemyHP, setEnemyHP] = useState(100 + (winCount * 5));
    const [haveGone, setHaveGone] = useState(false);
    const [announcement, setAnnouncement] = useState("Fight!");

    useEffect(() => {
        if(enemyHP < 1){
            setAnnouncement("you won!");
            winCount = winCount + 1;
            console.log(winCount);
        }
        if(ourHP < 1){
            setAnnouncement("YOU LOST AHAHA");
        }
    }, [enemyHP, ourHP, winCount])

    const slap = () => {
        if(haveGone){
            alert("You've already gone this turn, you must end your turn.");
        } else {
            setEnemyHP(enemyHP-20)
            setAnnouncement("You slapped them!") 
        }
        setHaveGone(true);
    }
    
        const nap = () => {
            if(haveGone){
                alert("You've already gone this turn, you must end your turn.");
            } else {
                if (ourHP + 30 > (100 + (winCount * 5))){
                    let fullhp = (100 + (winCount * 5)) - ourHP;
                   setHP(ourHP + fullhp);
                   setAnnouncement("You healed to full hp!")
                } else {
                    setHP(ourHP + 30);
                    setAnnouncement("You healed +30hp!")
                }
            }
           setHaveGone(true);
        }
    
        const runOver = () => {
            if(haveGone){
                alert("You've already gone this turn, you must end your turn.");
            } else {
                let hitChance = Math.random() * 10;
            if (hitChance > 0 && hitChance < 2.5){
                setAnnouncement("OHHHH! You ran them over! -50HP!")
                setEnemyHP(enemyHP - 50);
            } else {
                console.log(hitChance);
                setAnnouncement("Uh oh, you missed!")
            }
            }
            setHaveGone(true);
        }

    const enemyAttack = () => {
            setHP(ourHP - 20);  
            setHaveGone(false);
            setAnnouncement("You just got slapped! -20hp")
    }

    return (
       <div>
        <Wincount wins={winCount}/>
        <Hud slap={slap} nap={nap} runover={runOver}/>
        <HPbar currentHP={ourHP} maxHP={100 + (winCount * 5)}/>
        <Announcer announcement={announcement}/>
        <EnemyHPbar enemyCurrentHP={enemyHP} enemyMaxHP={100 + (winCount * 5)} />
        <button onClick={enemyAttack}>End Turn</button>
       </div>
    );
};

export default Battle;
