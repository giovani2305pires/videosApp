import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JusticaFamiliaPageRoutingModule } from './justica-familia-routing.module';

import { JusticaFamiliaPage } from './justica-familia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JusticaFamiliaPageRoutingModule
  ],
  declarations: [JusticaFamiliaPage]
})
export class JusticaFamiliaPageModule {}
