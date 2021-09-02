import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitoPage } from './infinito.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitoPageRoutingModule {}
