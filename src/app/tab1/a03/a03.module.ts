import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A03PageRoutingModule } from './a03-routing.module';

import { A03Page } from './a03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A03PageRoutingModule
  ],
  declarations: [A03Page]
})
export class A03PageModule {}
