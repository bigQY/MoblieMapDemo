import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B02PageRoutingModule } from './b02-routing.module';

import { B02Page } from './b02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B02PageRoutingModule
  ],
  declarations: [B02Page]
})
export class B02PageModule {}
