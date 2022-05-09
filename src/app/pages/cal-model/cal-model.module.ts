import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalModelPageRoutingModule } from './cal-model-routing.module';

import { CalModelPage } from './cal-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalModelPageRoutingModule
  ],
  declarations: [CalModelPage]
})
export class CalModelPageModule {}
