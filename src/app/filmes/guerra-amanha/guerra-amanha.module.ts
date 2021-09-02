import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuerraAmanhaPageRoutingModule } from './guerra-amanha-routing.module';

import { GuerraAmanhaPage } from './guerra-amanha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuerraAmanhaPageRoutingModule
  ],
  declarations: [GuerraAmanhaPage]
})
export class GuerraAmanhaPageModule {}
