import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import AuthResponse from 'src/app/Entity/AuthResponse';
import LoginRequest from 'src/app/Entity/LoginRequest';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display = "none";

  auth:LoginRequest=new LoginRequest();
  loginResponse:AuthResponse=new AuthResponse();

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  refresh(){
    window.location.reload();
  }
  checkUserLogin(){
    this.userService.login(this.auth).subscribe(
      resp=>{
        this.loginResponse=resp;
        alert(resp.message);
        if(resp.role===1){
          console.log("Admin login");
          sessionStorage.setItem('role',""+resp.role);
          sessionStorage.setItem('userEmail',resp.user.email);
          sessionStorage.setItem('userId',""+resp.user.userId);
          sessionStorage.setItem('memberId',""+resp.user.memberId);
          this.onCloseHandled();
        }
        else if(resp.role===2){
          console.log("Member login");
          sessionStorage.setItem('role',""+resp.role);
          sessionStorage.setItem('userEmail',resp.user.email);
          sessionStorage.setItem('userId',""+resp.user.userId);
          sessionStorage.setItem('memberId',""+resp.user.memberId);
          this.onCloseHandled();
        }
      },
      err=>{
        this.loginResponse=err;
        alert(this.loginResponse.message);
      }
    )
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userEmail')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('userEmail')
  }
  constructor(public http:HttpClient,public userService:UserService) { }

  ngOnInit(): void {
  }

}
