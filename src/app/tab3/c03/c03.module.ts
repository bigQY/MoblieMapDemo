import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C03PageRoutingModule } from './c03-routing.module';

import { C03Page } from './c03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C03PageRoutingModule
  ],
  declarations: [C03Page]
})
export class C03PageModule {}
