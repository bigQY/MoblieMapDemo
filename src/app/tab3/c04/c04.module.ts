import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C04PageRoutingModule } from './c04-routing.module';

import { C04Page } from './c04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C04PageRoutingModule
  ],
  declarations: [C04Page]
})
export class C04PageModule {}
