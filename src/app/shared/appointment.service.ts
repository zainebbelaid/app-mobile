import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
 
  // Create
  createBooking(apt: Appointment) {
    return this.bookingListRef.push({
      name: apt.name,
      prenom: apt.prenom,
      structure: apt.structure,
      fix: apt.fix,
      portable: apt.portable,
      fax: apt.fax,
      adresse: apt.adresse,
      email: apt.email,
      site: apt.site,
      note: apt.note
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({     
      name: apt.name,
      prenom: apt.prenom,
      structure: apt.structure,
      fix: apt.fix,
      portable: apt.portable,
      fax: apt.fax,
      adresse: apt.adresse,
      email: apt.email,
      site: apt.site,
      note: apt.note
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}
