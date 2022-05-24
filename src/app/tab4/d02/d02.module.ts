import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D02PageRoutingModule } from './d02-routing.module';

import { D02Page } from './d02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D02PageRoutingModule
  ],
  declarations: [D02Page]
})
export class D02PageModule {}
