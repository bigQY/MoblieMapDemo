import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D02Page } from './d02.page';

const routes: Routes = [
  {
    path: '',
    component: D02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D02PageRoutingModule {}
