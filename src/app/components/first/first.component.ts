import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../shared/firebase.service';
import { error } from 'console';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService){
    this.bookingForm = this.fb.group({
      name: [''],
      phone: [''],
      persons: [''],
      packet: [''],
      zone: [''],
      timeStart: [''],
      timeEnd: [''],
      selectedDate: ['']
    })
  }

  ngOnInit() {
    
  }

  submitForm(){
    if(this.bookingForm.valid){
      this.firebaseService.saveFromData(this.bookingForm.value)
        .then(() => {
          console.log("Form data saved successfuly")
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
