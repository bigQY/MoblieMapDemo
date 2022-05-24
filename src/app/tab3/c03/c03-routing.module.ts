import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C03Page } from './c03.page';

const routes: Routes = [
  {
    path: '',
    component: C03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C03PageRoutingModule {}
