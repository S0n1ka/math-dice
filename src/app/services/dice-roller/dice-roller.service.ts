import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {

  constructor() { }

  public get rollThreeSided(): number {
    return this.rollDice(3);
  }
  public get rollSixSided(): number {
    return this.rollDice(6);
  }
  public get rollTenSided(): number {
    return this.rollDice(10);
  }
  public get rollTwelveSided(): number {
    return this.rollDice(12);
  }
  public get rollTwentySided(): number {
    return this.rollDice(20);
  }


  private rollDice(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
  }
}
