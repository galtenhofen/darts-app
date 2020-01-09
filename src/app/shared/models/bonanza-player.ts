export class BonanzaPlayer {
  name: string;
  position: number;
  strikes: number;
  bonanzas: number;
  isAlive: boolean;

  constructor(name, position){
    this.name = name;
    this.position = position;
    this.strikes = 0;
    this.bonanzas = 0;
    this.isAlive = true;
  }

}
