import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C04Page } from './c04.page';

const routes: Routes = [
  {
    path: '',
    component: C04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C04PageRoutingModule {}
