import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D05Page } from './d05.page';

const routes: Routes = [
  {
    path: '',
    component: D05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D05PageRoutingModule {}
