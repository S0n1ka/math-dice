import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathDicePageRoutingModule } from './math-dice-routing.module';

import { MathDicePage } from './math-dice.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathDicePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MathDicePage]
})
export class MathDicePageModule {}
