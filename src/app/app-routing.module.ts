import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { BookingComponent } from './components/booking/booking.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

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
    path: 'confirm',
    component: ConfirmComponent
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
