import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C02Page } from './c02.page';

const routes: Routes = [
  {
    path: '',
    component: C02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class C02PageRoutingModule {}
