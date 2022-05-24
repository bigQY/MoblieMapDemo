import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D09Page } from './d09.page';

const routes: Routes = [
  {
    path: '',
    component: D09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D09PageRoutingModule {}
