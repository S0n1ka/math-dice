import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FantasyAgeDicePageRoutingModule } from './fantasy-age-dice-routing.module';

import { FantasyAgeDicePage } from './fantasy-age-dice.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FantasyAgeDicePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FantasyAgeDicePage]
})
export class FantasyAgeDicePageModule {}
