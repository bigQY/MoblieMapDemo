import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C02PageRoutingModule } from './c02-routing.module';

import { C02Page } from './c02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C02PageRoutingModule
  ],
  declarations: [C02Page]
})
export class C02PageModule {}
