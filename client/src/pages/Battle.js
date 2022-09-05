import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Battle = (props) => {
    // const enemy = {hp: 100+(wins * 5), attack: 1 +(wins * 5)}
    // const [HP, setHP] = useState(100 + itemHP);
    // const [enemyHP, setEnemyHP] = useState(enemy.hp)

    return (
        <div className="flex-row justify-center mb-4">
            <div className="flex-column justify-flex-start">
                <Header />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Battle;
