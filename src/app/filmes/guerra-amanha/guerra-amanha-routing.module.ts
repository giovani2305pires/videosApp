import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuerraAmanhaPage } from './guerra-amanha.page';

const routes: Routes = [
  {
    path: '',
    component: GuerraAmanhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuerraAmanhaPageRoutingModule {}
