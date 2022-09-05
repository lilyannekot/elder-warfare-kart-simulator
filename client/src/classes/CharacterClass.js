export default class Character {
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
