import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AboutComponent } from './about/about.component';

const firebaseConfig = {
  apiKey: "AIzaSyB3EESWXKT9_Q3EWqnbCBMB4YPEcTqN6TM",
  authDomain: "mysitekv.firebaseapp.com",
  databaseURL: "https://mysitekv.firebaseio.com",
  projectId: "mysitekv",
  storageBucket: "mysitekv.appspot.com",
  messagingSenderId: "704627422302",
  appId: "1:704627422302:web:80b43cc19ec3e9e3"
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
