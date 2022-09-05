class Character {
    constructor(hp, damage, credits) {
        this.hp = hp;
        this.damage = damage;
        this.credits = credits;
    }

    random() {
        return Math.floor(Math.random() * 21)
    }
    attack(target) {
        target.hp = target.hp - this.damage
    }
    randAttack(target) {
        target.hp = target.hp - this.random()
    }
    heal() {
        this.hp = this.hp + this.damage
    }
};

const playerCharacter = new Character(100, 10, 100);

const enemyOne = new Character(100, 5, 0);
const enemyTwo = new Character(100, 10, 0);
const enemyThree = new Character(100, 15, 0);
const enemyFour = new Character(100, 20, 0);
const enemyFive = new Character(100, 25, 0);
const enemySix = new Character(100, 30, 0);
const enemySeven = new Character(100, 35, 0);
const enemyEight = new Character(100, 40, 0);

module.exports = {
    playerCharacter,
    enemyOne,
    enemyTwo,
    enemyThree,
    enemyFour,
    enemyFive,
    enemySix,
    enemySeven,
    enemyEight
};