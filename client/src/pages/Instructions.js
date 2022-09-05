import '../index.css'

function Instructions() {
    return (
        <div className="instructions">
            <h1>Welcome to Elder Warfare Kart Simulator!</h1>
            <h3>Here is all you need to know to play:</h3>
            <h4>The game is centered around turn based combat and purchasing items to boost your stats.</h4>
            <h4>You have HP and attack stats, your attack stat modifies the damage your abilities do.</h4>
            <h4>After combat, you are taken to a store page where you can choose to buy items for the next battle.</h4>
            <h4>You have four abilities:</h4>
            <ul>
                <li>Slap: Basic attack, high hit chance.</li>
                <li>Nap time: replenishes hp</li>
                <li>Run-over: High damage attack with low hit chance</li>
                <li>Run-away: leave the battle.</li>
            </ul>
            <h4>If you lose, your account is permanently deleted.</h4>
            <button className="continue-button"><Link to="/Battle">Play!</Link></button>
        </div>
    )
}

export default Instructions;
