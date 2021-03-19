import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormuService } from './../shared/formu.service';

@Component({
  selector: 'app-make-formu',
  templateUrl: './make-formu.page.html',
  styleUrls: ['./make-formu.page.scss'],
})
export class MakeFormuPage implements OnInit {
  bookingForm: FormGroup;

  constructor(
    private aptService: FormuService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
    nom: [''],
    pernom: [''],
    daten: [''],
    adresse: [''],
    email: [''],
    taille: [''],
    poids: [''],
    alrgone: [''],
    alrgtow: [''],
    alrgtree: [''],
    alrgfour: [''],
    alrgfive: [''],
    alrgsix: [''],
    alrgseven: [''],
    rgmone: [''],
    rgmtow: [''],
    rgmtree: [''],
    rgmfour: [''],
    sondeone: [''],
    sondetow: [''],
    sondetree: [''],
    sondefour: [''],
    proone: [''],
    protow: [''],
    protree: [''],
    profour: [''],
    Trpsy:[''] 
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
