import { Injectable,EventEmitter } from '@angular/core';
import { BonanzaPlayer } from "@models/bonanza-player";

@Injectable({
  providedIn: 'root'
})
export class BonanzaService {

  currentPlayers: EventEmitter<BonanzaPlayer[]>;

  constructor() {
    this.currentPlayers = new EventEmitter<BonanzaPlayer[]>()
  }

  playerEvent():void{
    this.currentPlayers.emit();
  }

}
