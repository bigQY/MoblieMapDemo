import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D01Page } from './d01.page';

const routes: Routes = [
  {
    path: '',
    component: D01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D01PageRoutingModule {}
