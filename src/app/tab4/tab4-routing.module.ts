import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path : 'd01',loadChildren: () => import('./d01/d01.module').then(m => m.D01PageModule)
  },
  {
    path : 'd02',loadChildren: () => import('./d02/d02.module').then(m => m.D02PageModule)
  },
  {
    path : 'd03',loadChildren: () => import('./d03/d03.module').then(m => m.D03PageModule)
  },
  {
    path : 'd04',loadChildren: () => import('./d04/d04.module').then(m => m.D04PageModule)
  },
  {
    path : 'd05',loadChildren: () => import('./d05/d05.module').then(m => m.D05PageModule)
  },
  {
    path : 'd06',loadChildren: () => import('./d06/d06.module').then(m => m.D06PageModule)
  },
  {
    path : 'd07',loadChildren: () => import('./d07/d07.module').then(m => m.D07PageModule)
  },
  {
    path : 'd08',loadChildren: () => import('./d08/d08.module').then(m => m.D08PageModule)
  },
  {
    path : 'd09',loadChildren: () => import('./d09/d09.module').then(m => m.D09PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
