import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A02PageRoutingModule } from './a02-routing.module';

import { A02Page } from './a02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A02PageRoutingModule
  ],
  declarations: [A02Page]
})
export class A02PageModule {}
