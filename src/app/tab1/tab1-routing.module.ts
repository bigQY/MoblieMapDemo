import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'a01',
    loadChildren:()=>import('./a01/a01.module').then(m=>m.A01PageModule)
  },
  {
    path:'a02',
    loadChildren:()=>import('./a02/a02.module').then(m=>m.A02PageModule)
  },
  {
    path: 'a03',
    loadChildren: () => import('./a03/a03.module').then( m => m.A03PageModule)
  },
  {
    path: 'a04',
    loadChildren: () => import('./a04/a04.module').then( m => m.A04PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
