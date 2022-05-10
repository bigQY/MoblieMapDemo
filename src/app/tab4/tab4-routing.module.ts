import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'd04',
    loadChildren: () => import('./d04/d04.module').then( m => m.D04PageModule)
  },
  {
    path: 'd01',
    loadChildren: () => import('./d01/d01.module').then( m => m.D01PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
