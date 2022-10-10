import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AuthResponse from '../Entity/AuthResponse';
import LoginRequest from '../Entity/LoginRequest';

const BASE_URL="http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  login(auth:LoginRequest){
    return this.http.post<AuthResponse>(BASE_URL+"/user/login",auth);
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('userEmail');
    let role = sessionStorage.getItem('role');
    let flag = false;
    if (!(role === null) && (role === "" + 1)) {
      console.log(!(user === null))
      flag = !(user === null);
    }
    return flag;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userEmail')
    console.log(!(user === null))
    return !(user === null)
  }

  isMemberLoggedIn() {
      let user = sessionStorage.getItem('userEmail');
      let role = sessionStorage.getItem('role');
      let flag = false;
      if (!(role === null) && (role === "" + 2)) {
        console.log(!(user === null))
        flag = !(user === null);
      }
    return flag;
  }

  logOut() {
    sessionStorage.removeItem('userEmail')
  }

  saveUser(user: {
    userEmail: string;
    password: string;
    role: number;
  }) {
    return this.http.post(BASE_URL + "/user/save", user, { responseType: "text" });
  }


  constructor(public http:HttpClient) { }
}
