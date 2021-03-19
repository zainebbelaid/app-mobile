import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFormuPageRoutingModule } from './edit-formu-routing.module';

import { EditFormuPage } from './edit-formu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditFormuPageRoutingModule
  ],
  declarations: [EditFormuPage]
})
export class EditFormuPageModule {}
