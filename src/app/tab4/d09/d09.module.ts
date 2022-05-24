import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D09PageRoutingModule } from './d09-routing.module';

import { D09Page } from './d09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D09PageRoutingModule
  ],
  declarations: [D09Page]
})
export class D09PageModule {}
