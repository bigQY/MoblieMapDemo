import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D08PageRoutingModule } from './d08-routing.module';

import { D08Page } from './d08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D08PageRoutingModule
  ],
  declarations: [D08Page]
})
export class D08PageModule {}
