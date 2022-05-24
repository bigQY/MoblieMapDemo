import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D07PageRoutingModule } from './d07-routing.module';

import { D07Page } from './d07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D07PageRoutingModule
  ],
  declarations: [D07Page]
})
export class D07PageModule {}
