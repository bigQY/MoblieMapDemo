import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A01Page } from './a01.page';

const routes: Routes = [
  {
    path: '',
    component: A01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A01PageRoutingModule {}
