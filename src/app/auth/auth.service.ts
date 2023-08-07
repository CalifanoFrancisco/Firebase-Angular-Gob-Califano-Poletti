import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { UserData } from '../types/userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  login(data:UserData){
    return signInWithEmailAndPassword(this.auth, data.email, data.password);
  }

  logout(){
    return signOut(this.auth);
  }

  register(data:UserData){
    return createUserWithEmailAndPassword(this.auth, data.email, data.password)
  }
}
