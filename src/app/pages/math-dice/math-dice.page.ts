import { Component, OnInit } from '@angular/core';
import { DiceRollerService } from 'src/app/services/dice-roller/dice-roller.service';

@Component({
  selector: 'app-math-dice',
  templateUrl: './math-dice.page.html',
  styleUrls: ['./math-dice.page.scss'],
})
export class MathDicePage implements OnInit {

  sixSidedDice: number[];
  twelveSidedDice: number[];

  constructor(private diceRoller: DiceRollerService) { }

  ngOnInit() {
    this.roll();
  }

  roll() {
    this.sixSidedDice = [this.diceRoller.rollSixSided, this.diceRoller.rollSixSided, this.diceRoller.rollSixSided];
    this.twelveSidedDice = [this.diceRoller.rollTwelveSided, this.diceRoller.rollTwelveSided];
  }

  returnTotal(): number {
    return this.twelveSidedDice.reduce((a,b) => a + b, 0);
  }

}
