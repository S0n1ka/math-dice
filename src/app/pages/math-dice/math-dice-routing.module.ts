import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathDicePage } from './math-dice.page';

const routes: Routes = [
  {
    path: '',
    component: MathDicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathDicePageRoutingModule {}
