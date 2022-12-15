import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tramite3PageRoutingModule } from './tramite3-routing.module';

import { Tramite3Page } from './tramite3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tramite3PageRoutingModule
  ],
  declarations: [Tramite3Page]
})
export class Tramite3PageModule {}
