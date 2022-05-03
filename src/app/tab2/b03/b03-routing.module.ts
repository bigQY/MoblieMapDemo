import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B03Page } from './b03.page';

const routes: Routes = [
  {
    path: '',
    component: B03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B03PageRoutingModule {}
