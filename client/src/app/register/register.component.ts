import { Component } from '@angular/core';
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username?: string;
  password?: string;
  cpassword?: string;
  country?: string;


  createNewUser() {
    if(this.password !== this.cpassword) {
      alert("Password and Confirm password should match")
    } else {
      // newUser = {
      //   username: this.username,
      //   password: this.password,
      //   country: this.country,
      //   account: {

        }
      };
    // }

  // }
}
