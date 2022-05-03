import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B04PageRoutingModule } from './b04-routing.module';

import { B04Page } from './b04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B04PageRoutingModule
  ],
  declarations: [B04Page]
})
export class B04PageModule {}
