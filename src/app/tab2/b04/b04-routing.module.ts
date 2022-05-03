import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B04Page } from './b04.page';

const routes: Routes = [
  {
    path: '',
    component: B04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B04PageRoutingModule {}
