import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tramite3Page } from './tramite3.page';

const routes: Routes = [
  {
    path: '',
    component: Tramite3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tramite3PageRoutingModule {}
