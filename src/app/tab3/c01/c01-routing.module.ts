import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C01Page } from './c01.page';

const routes: Routes = [
  {
    path: '',
    component: C01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C01PageRoutingModule {}
