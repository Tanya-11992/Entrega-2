import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tramite2Page } from './tramite2.page';

const routes: Routes = [
  {
    path: '',
    component: Tramite2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tramite2PageRoutingModule {}
