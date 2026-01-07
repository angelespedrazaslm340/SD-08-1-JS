export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      this.experience = 0; 
    }

  info() {
    console.log(`${this.name} has reached Level ${this.level} with ${this.experience} XP!`);
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} leveled up! The next level is ${this.level}`);
  }

   ganaXP(points) {
    this.experience += points;
    console.log(`${this.name} gained ${points} XP! Total XP: ${this.experience}`);

    const baseXP = 10;
    while (this.experience >= baseXP) {
      this.experience -= baseXP;
      this.levelUp();  
    }
  }
}

const jugadorTara = new Player("Tara", 6);

jugadorTara.info();            
jugadorTara.ganaXP(5); 
jugadorTara.info();            
jugadorTara.ganaXP(7); 
jugadorTara.info();  
