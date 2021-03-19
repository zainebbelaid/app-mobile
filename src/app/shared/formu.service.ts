import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Formu } from '../shared/Formu';

@Injectable({
  providedIn: 'root'
})

export class FormuService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Formu) {
    return this.bookingListRef.push({
       
    nom: apt.nom,
    pernom: apt.pernom,
    daten: apt.daten,
    adresse: apt.adresse,
    email: apt.email,
    taille: apt.taille,
    poids: apt.poids,
    alrgone: apt.alrgone,
    alrgtow: apt.alrgtow,
    alrgtree: apt.alrgtree,
    alrgfour: apt.alrgfour,
    alrgfive: apt.alrgfive,
    alrgsix: apt.alrgsix,
    alrgseven: apt.alrgseven,
    rgmone: apt.rgmone,
    rgmtow: apt.rgmtow,
    rgmtree: apt.rgmtree,
    rgmfour: apt.rgmfour,
    sondeone: apt.sondeone,
    sondetow: apt.sondetow,
    sondetree: apt. sondetree,
    sondefour: apt.sondefour,
    proone: apt.proone,
    protow: apt.protow,
    protree: apt.protree,
    profour: apt.profour,
    Trpsy: apt.Trpsy
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/formu/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/formu');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Formu) {
    return this.bookingRef.update({
      nom: apt.nom,
      pernom: apt.pernom,
      daten: apt.daten,
      adresse: apt.adresse,
      email: apt.email,
      taille: apt.taille,
      poids: apt.poids,
      alrgone: apt.alrgone,
      alrgtow: apt.alrgtow,
      alrgtree: apt.alrgtree,
      alrgfour: apt.alrgfour,
      alrgfive: apt.alrgfive,
      alrgsix: apt.alrgsix,
      alrgseven: apt.alrgseven,
      rgmone: apt.rgmone,
      rgmtow: apt.rgmtow,
      rgmtree: apt.rgmtree,
      rgmfour: apt.rgmfour,
      sondeone: apt.sondeone,
      sondetow: apt.sondetow,
      sondetree: apt. sondetree,
      sondefour: apt.sondefour,
      proone: apt.proone,
      protow: apt.protow,
      protree: apt.protree,
      profour: apt.profour,
      Trpsy: apt.Trpsy
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/formu/' + id);
    this.bookingRef.remove();
  }
}
