import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D04PageRoutingModule } from './d04-routing.module';

import { D04Page } from './d04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D04PageRoutingModule
  ],
  declarations: [D04Page]
})
export class D04PageModule {}
