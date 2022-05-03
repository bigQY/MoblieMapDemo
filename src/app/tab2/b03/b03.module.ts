import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B03PageRoutingModule } from './b03-routing.module';

import { B03Page } from './b03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    B03PageRoutingModule
  ],
  declarations: [B03Page]
})
export class B03PageModule {}
