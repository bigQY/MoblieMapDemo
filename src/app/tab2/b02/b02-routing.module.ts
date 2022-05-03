import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B02Page } from './b02.page';

const routes: Routes = [
  {
    path: '',
    component: B02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B02PageRoutingModule {}
