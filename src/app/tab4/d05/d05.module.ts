import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D05PageRoutingModule } from './d05-routing.module';

import { D05Page } from './d05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D05PageRoutingModule
  ],
  declarations: [D05Page]
})
export class D05PageModule {}
