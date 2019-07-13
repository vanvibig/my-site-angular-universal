import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// 1. Import the libs you need
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AboutComponent} from './about/about.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {CreateComponent} from './components/create/create.component';
import {IndexComponent} from './components/index/index.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserState} from './state/user.state';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {LoginComponent} from './admin/login/login.component';
import {RegisterComponent} from './admin/register/register.component';
import {ForgotPasswordComponent} from './admin/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './admin/verify-email/verify-email.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './admin/auth/auth.component';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {HttpClientModule} from '@angular/common/http';

const firebaseConfig = {
  apiKey: 'AIzaSyB3EESWXKT9_Q3EWqnbCBMB4YPEcTqN6TM',
  authDomain: 'mysitekv.firebaseapp.com',
  databaseURL: 'https://mysitekv.firebaseio.com',
  projectId: 'mysitekv',
  storageBucket: 'mysitekv.appspot.com',
  messagingSenderId: '704627422302',
  appId: '1:704627422302:web:80b43cc19ec3e9e3'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    IndexComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage,
    NgxsModule.forRoot([
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    LoggerModule.forRoot({
        serverLoggingUrl: '/api/logs',
        level: NgxLoggerLevel.DEBUG,
        serverLogLevel: NgxLoggerLevel.ERROR
      }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
