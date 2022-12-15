const MAX_LIFE = 100;

class Fighter {
  constructor(name, emoji, strength, dexterity) {
    this.name = name;
    this.emoji = emoji;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(defender) {
    const attackPoints = this.getRandomInt(this.strength);

    const damages = Math.max(attackPoints - defender.dexterity, 0);

    defender.life = Math.max(defender.life - damages, 0);
  }

  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
