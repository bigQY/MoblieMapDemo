import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D01PageRoutingModule } from './d01-routing.module';

import { D01Page } from './d01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D01PageRoutingModule
  ],
  declarations: [D01Page]
})
export class D01PageModule {}
