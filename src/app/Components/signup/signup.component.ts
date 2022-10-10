import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  display = "none";

  signupUser(){
    const observable = this.userService.saveUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert(response);
        this.router.navigate(['/home']);
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
  }z

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

}
