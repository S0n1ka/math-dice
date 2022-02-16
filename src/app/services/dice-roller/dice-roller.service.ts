import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {

  constructor() { }

  public get rollSixSided(): number {
    return this.rollDice(6);
  }

  public get rollTwelveSided(): number {
    return this.rollDice(12);
  }

  private rollDice(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
  }
}
