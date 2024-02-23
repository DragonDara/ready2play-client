import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

  mode: string = 'Standard'


  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(PopUpComponent)
  }

  ngOnInit() {
    this.mode = 'Standard'

    
  }

  changeMode(mode: string){
    this.mode = mode
  }

}