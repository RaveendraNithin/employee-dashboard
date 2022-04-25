import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  ) { }

  public loginUser(data: any) {
    localStorage.setItem('user', data);
  }

  public logoutUser() {
    localStorage.removeItem('user');
  }

  public get getUser() {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user');
    }
    return;
  }

  public get isLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }


}
