import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D06Page } from './d06.page';

const routes: Routes = [
  {
    path: '',
    component: D06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D06PageRoutingModule {}
