import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path : 'c01',loadChildren: () => import('./c01/c01.module').then(m => m.C01PageModule)
  },
  {
    path : 'c02',loadChildren: () => import('./c02/c02.module').then(m => m.C02PageModule)
  },
  {
    path : 'c03',loadChildren: () => import('./c03/c03.module').then(m => m.C03PageModule)
  },
  {
    path : 'c04',loadChildren: () => import('./c04/c04.module').then(m => m.C04PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
