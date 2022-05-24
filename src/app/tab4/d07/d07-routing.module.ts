import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D07Page } from './d07.page';

const routes: Routes = [
  {
    path: '',
    component: D07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D07PageRoutingModule {}
