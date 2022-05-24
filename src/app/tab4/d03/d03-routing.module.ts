import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D03Page } from './d03.page';

const routes: Routes = [
  {
    path: '',
    component: D03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D03PageRoutingModule {}
