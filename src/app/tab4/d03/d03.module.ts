import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D03PageRoutingModule } from './d03-routing.module';

import { D03Page } from './d03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D03PageRoutingModule
  ],
  declarations: [D03Page]
})
export class D03PageModule {}
