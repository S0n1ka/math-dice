import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FantasyAgeDicePage } from './fantasy-age-dice.page';

const routes: Routes = [
  {
    path: '',
    component: FantasyAgeDicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FantasyAgeDicePageRoutingModule {}
