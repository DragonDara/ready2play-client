import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  
  cells: Cell[] = [];

  ngOnInit() {

    for(let i = 1; i <= 70; i++){
      const cell: Cell = {
        text: 'Место ' + i
      }

      this.cells.push(cell)
    }
  }

}

interface Cell {
  text: string
}