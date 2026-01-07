export class Player {
    constructor(name, level) {
      this.name= name
      this.level= level
    }
    info(){
      console.log(`${this.name} has reached ${this.level}`);
    }
    
  
    levelUp(){
      this.level += 1
    }
  }
  const jugadorTara= new Player ("Tara", 6)
  jugadorTara.info();
  jugadorTara.levelUp();
  jugadorTara.info();
  