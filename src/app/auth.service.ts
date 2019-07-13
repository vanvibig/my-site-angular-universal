import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$;

  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public logger: NGXLogger
  ) {
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  get currentUserObservable(): any {
    return this.angularFireAuth.auth;
  }

  async login(email: string, password: string) {
    return await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  async sendEmailVerification() {
    return await this.angularFireAuth.auth.currentUser.sendEmailVerification();
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.angularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    return await this.angularFireAuth.auth.signOut();
  }


  isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.logger.debug(user.email);
    return user;
  }

  get authenticated(): boolean {
    return this.isUserLoggedIn() !== null;
  }

  async  loginWithGoogle() {
    return await this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
