import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeFormuPageRoutingModule } from './make-formu-routing.module';

import { MakeFormuPage } from './make-formu.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeFormuPageRoutingModule
  ],
  declarations: [MakeFormuPage]
})
export class MakeFormuPageModule {}
