import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JungleCruisePage } from './jungle-cruise.page';

const routes: Routes = [
  {
    path: '',
    component: JungleCruisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JungleCruisePageRoutingModule {}
