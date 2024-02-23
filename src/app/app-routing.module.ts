import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { BookingComponent } from './components/booking/booking.component';
import { FinishComponent } from './components/finish/finish.component';


const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'finish',
    component: FinishComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
