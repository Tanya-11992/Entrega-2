import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tramite2PageRoutingModule } from './tramite2-routing.module';

import { Tramite2Page } from './tramite2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tramite2PageRoutingModule
  ],
  declarations: [Tramite2Page]
})
export class Tramite2PageModule {}
