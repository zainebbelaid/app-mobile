import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.page.html',
  styleUrls: ['./rendez-vous.page.scss'],
})
export class RendezVousPage implements OnInit {
  date: string;
  type: 'string';
  dateMulti: string[];
  dateRange: { from: string; to: string; };

  constructor( public modalCtrl: ModalController) { }

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  onChange($event) {
    console.log($event);
  }
  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'BASIC',
      color:'danger'
    };

  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options }
  });

  myCalendar.present();
}
  ngOnInit() {
    this.openCalendar()
  }

}
