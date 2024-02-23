import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  saveFromData(formData: any): Promise<any>{
    return this.firestore.collection('/bookings').add(formData)
  }
}
