import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D08Page } from './d08.page';

const routes: Routes = [
  {
    path: '',
    component: D08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D08PageRoutingModule {}
