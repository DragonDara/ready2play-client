import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatFormField} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BookingComponent } from './components/booking/booking.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FinishComponent } from './components/finish/finish.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { provideNativeDateAdapter } from '@angular/material/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environment/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StandardZoneComponent } from './components/standard-zone/standard-zone.component';
import { BootcampZoneComponent } from './components/bootcamp-zone/bootcamp-zone.component';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

  


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BookingComponent,
    PopUpComponent,
    FinishComponent,
    StandardZoneComponent,
    BootcampZoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp({"projectId":"ready2play-8c017","appId":"1:325168822825:web:9171268ddf5ad68a02fa38","storageBucket":"ready2play-8c017.appspot.com","apiKey":"AIzaSyCIi2uOMBXU9jF3E-FjW6-Zw3O_ktmL-zY","authDomain":"ready2play-8c017.firebaseapp.com","messagingSenderId":"325168822825"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule,
    FirestoreModule,
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
