import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B01Page } from './b01.page';

const routes: Routes = [
  {
    path: '',
    component: B01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class B01PageRoutingModule {}
