import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D06PageRoutingModule } from './d06-routing.module';

import { D06Page } from './d06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D06PageRoutingModule
  ],
  declarations: [D06Page]
})
export class D06PageModule {}
