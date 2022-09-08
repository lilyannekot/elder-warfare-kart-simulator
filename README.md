# Elder Warfare Kart Simulator

## Description

Elder Warfare Kart Simulator is a turn-based combat game, inspired by similar games such as Pokemon. When you start a battle, you have 4 abilities: Slap - do 20 damage to your enemy, Nap - heal 30 hp, Run-over - have a 25% chance to do 50 damage to your enemy, and Run-away - which returns you to the instructions page. If you reduce your enemies hp to 0, your wincounter will increment by 1. If you lose, your account will be deleted.

## Table of Contents

- [Languages and Technology Used](#languages-and-technology-used)
- [Deployed Link](#deployed-link)
- [Site Demonstration](#site-demonstration)
- [Code Snippet](#code-snippet)
- [Collaborators](#collaborators)

## Languages and Technologies Used

- MongoDB / Mongoose
- React
- Express.js
- Reactstrap
- Validator.js
- JWT
- dotenv
- bcrypt.js

## Deployed Link

Our site is deployed through heroku [HERE](https://elder-warfare-kart-simulator.herokuapp.com/)!

## Site Demonstration

Below is a demonstration of a round of combat:

![battle-demo](./client/public/assets/battle.gif)

Below is an example of the Slap ability, all abilities are structured in a similar conditional fashion, in which the haveGone boolean is checked before any work is done.

```javascript
const slap = () => {
    if (haveGone) {
      alert("You've already gone this turn, you must end your turn.");
    } else {
      setEnemyHP(enemyHP - 20);
      setAnnouncement("You slapped them!");
    }
    setHaveGone(true);
  };
```

## Code Snippet

One of the new technologies we used was Reactstrap, a Bootstrap library made to be used within React. Below is an example of how we used Reactstrap to implement a footer:

```javascript
<Nav justified className="bg-danger footer-nav">
    <NavItem>
        <NavLink href="https://github.com/lilyannekot" target="_blank" className="text-white nav-item">
        Lily Kot
        </NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="https://github.com/ltmccarthy9" target="_blank" className="text-white nav-item">
        Liam McCarthy
        </NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="https://github.com/pbarkley" target="_blank" className="text-white nav-item">
        Pat Barkley
        </NavLink>
    </NavItem>
</Nav>
```

Here we are importing the pre-built React components Nav, NavItem, and NavLink, and implementing them within our App.js file the way we would any custom React component.


## Collaborators

- [Pat Barkley](https://github.com/pbarkley)
- [Lily Kot](https://github.com/lilyannekot)
- [Liam McCarthy](https://github.com/ltmccarthy9)
