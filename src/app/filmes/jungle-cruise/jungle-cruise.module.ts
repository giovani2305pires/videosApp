import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JungleCruisePageRoutingModule } from './jungle-cruise-routing.module';

import { JungleCruisePage } from './jungle-cruise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JungleCruisePageRoutingModule
  ],
  declarations: [JungleCruisePage]
})
export class JungleCruisePageModule {}
