import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitoPageRoutingModule } from './infinito-routing.module';

import { InfinitoPage } from './infinito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitoPageRoutingModule
  ],
  declarations: [InfinitoPage]
})
export class InfinitoPageModule {}
