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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
