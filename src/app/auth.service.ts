import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public miAuth: AngularFireAuth) { }
  user = this.miAuth.authState.pipe( map( authState => {
    console.log('authState', authState);
    if (!authState) {
      return null;
    } else {
      // …
      return authState;
    }
  }) );
  login() {
    console.log('login!');
  }
  glogin() {
    console.log('google login!');
   /* this.miAuth.auth.signInWithPopup( new auth.GoogleAuthProvider() )
      .then( user => {
        console.log('user logado: ', user);
        this.email = '';
        this.pass = '';
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      });*/
  }
  logout() {
    console.log('logout!');
  }
}
