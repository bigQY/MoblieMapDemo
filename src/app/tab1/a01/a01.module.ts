import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A01PageRoutingModule } from './a01-routing.module';

import { A01Page } from './a01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A01PageRoutingModule
  ],
  declarations: [A01Page]
})
export class A01PageModule {}
