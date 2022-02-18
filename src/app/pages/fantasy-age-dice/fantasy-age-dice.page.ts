import { Component, OnInit } from '@angular/core';
import { DiceRollerService } from 'src/app/services/dice-roller/dice-roller.service';

@Component({
  selector: 'app-fantasy-age-dice',
  templateUrl: './fantasy-age-dice.page.html',
  styleUrls: ['./fantasy-age-dice.page.scss'],
})
export class FantasyAgeDicePage implements OnInit {
  sixSidedDice: number[];

  constructor(private diceRoller: DiceRollerService) { }

  ngOnInit() {
    this.roll();
  }

  roll() {
    this.sixSidedDice = [this.diceRoller.rollSixSided];
  }

}
