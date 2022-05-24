import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { C01PageRoutingModule } from './c01-routing.module';

import { C01Page } from './c01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    C01PageRoutingModule
  ],
  declarations: [C01Page]
})
export class C01PageModule {}
