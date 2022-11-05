import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tramite1PageRoutingModule } from './tramite1-routing.module';

import { Tramite1Page } from './tramite1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tramite1PageRoutingModule
  ],
  declarations: [Tramite1Page]
})
export class Tramite1PageModule {}
