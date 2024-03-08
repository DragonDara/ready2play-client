import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { Booking } from '../../model/interfaces/booking';
import { BookingStatus } from '../../model/enum/booking-status';
import { Router } from '@angular/router';
import { Timestamp } from '@firebase/firestore';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  
  ngOnInit(): void {
    
  }

  constructor(private firestore: Firestore, private router: Router){}

  combindDateTime(date: Date, time: string): Date {

    const timeParts = time.split(':')
    const hours = parseInt(timeParts[0], 10)
    const minutes = parseInt(timeParts[1], 10)

    const combinded = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes)
    return combinded
  }

  addData(f: NgForm): void {
    

    
    const booking: Booking = {
      deviceId: 1,
      gamingCenterId: '1',
      id: '', // предполагая, что это уникальный идентификатор
      phoneNumber: f.value.phone,
      status: 1,
      tariffId: 2,
      timeFrom: this.combindDateTime(new Date(f.value.selectedDate), f.value.timeStart),
      timeTo: this.combindDateTime(new Date(f.value.selectedDate), f.value.timeEnd),
      userName: f.value.name,
      zoneId: '1'
    };

    const query = collection(this.firestore, 'bookings');
    addDoc(query, booking)
      .then(docRef => {
        booking.id = docRef.id
        console.log('Booking saved with ID: ', docRef.id);
        this.router.navigate(['/booking']);
      })
      .catch(err => {
        console.error('Error adding booking: ', err);
      });
  }
  
  

}


