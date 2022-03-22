import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A02Page } from './a02.page';

const routes: Routes = [
  {
    path: '',
    component: A02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A02PageRoutingModule {}
