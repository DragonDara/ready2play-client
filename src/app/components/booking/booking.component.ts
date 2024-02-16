import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(PopUpComponent)
  }



  cells: Cell[] = [];

  ngOnInit() {


    for(let i = 1; i <= 70; i++){
        const cell: Cell ={
          text: "" + i
        }

      this.cells.push(cell)
    }
  }

}

interface Cell {
  text: string
}