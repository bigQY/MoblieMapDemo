import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B01PageRoutingModule } from './b01-routing.module';

import { B01Page } from './b01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B01PageRoutingModule
  ],
  declarations: [B01Page]
})
export class B01PageModule {}
