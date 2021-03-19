import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormuService } from './../shared/formu.service';
@Component({
  selector: 'app-edit-formu',
  templateUrl: './edit-formu.page.html',
  styleUrls: ['./edit-formu.page.scss'],
})
export class EditFormuPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;

  constructor(
    private aptService: FormuService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
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
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
