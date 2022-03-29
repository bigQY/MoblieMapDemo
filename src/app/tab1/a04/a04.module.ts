import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A04PageRoutingModule } from './a04-routing.module';

import { A04Page } from './a04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A04PageRoutingModule
  ],
  declarations: [A04Page]
})
export class A04PageModule {}
