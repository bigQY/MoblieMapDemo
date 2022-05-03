import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'b01',
    loadChildren: () => import('./b01/b01.module').then( m => m.B01PageModule)
  },
  {
    path: 'b02',
    loadChildren: () => import('./b02/b02.module').then( m => m.B02PageModule)
  },
  {
    path: 'b03',
    loadChildren: () => import('./b03/b03.module').then( m => m.B03PageModule)
  },
  {
    path: 'b04',
    loadChildren: () => import('./b04/b04.module').then( m => m.B04PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
