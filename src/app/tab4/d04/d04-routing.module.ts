import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D04Page } from './d04.page';

const routes: Routes = [
  {
    path: '',
    component: D04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D04PageRoutingModule {}
