import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezVousPageRoutingModule } from './rendez-vous-routing.module';

import { RendezVousPage } from './rendez-vous.page';
// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendezVousPageRoutingModule,
    CalendarModule
  ],
  declarations: [RendezVousPage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }]
})
export class RendezVousPageModule {}
