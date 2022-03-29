import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A04Page } from './a04.page';

const routes: Routes = [
  {
    path: '',
    component: A04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A04PageRoutingModule {}
