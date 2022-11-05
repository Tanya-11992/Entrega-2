import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tramite1Page } from './tramite1.page';

const routes: Routes = [
  {
    path: '',
    component: Tramite1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tramite1PageRoutingModule {}
