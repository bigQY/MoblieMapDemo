import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A03Page } from './a03.page';

const routes: Routes = [
  {
    path: '',
    component: A03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A03PageRoutingModule {}
