import { Component } from '@angular/core';
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {setCurrentUser} from "../globals/globals";
import {HttpErrorResponse} from "@angular/common/http";
import {OnlineBankingUserService} from "../services/OnlineBankingUser.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

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

  userAlreadyExist!: boolean;
  passwordAndConfirmPasswordShouldMatch!: boolean;

  constructor(private userService: OnlineBankingUserService, private router: Router, private titleService: Title) {
    titleService.setTitle("Register");
    this.userAlreadyExist = false;
    this.passwordAndConfirmPasswordShouldMatch = false;
  }
  createNewUser() {
    var filter = {
      username: this.username,
      password: this.password
    }

    this.userService.getUsers().subscribe(
      (response: OnlinebankinguserModel[]) => {
        let users = response.filter(function (item) {
          if (item.username == filter.username && item.password == filter.password) {
            return true;
          }
          return false;
        });
        if (users.length != 0) {
          this.userAlreadyExist = true;
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    if (this.password !== this.cpassword) {
      this.passwordAndConfirmPasswordShouldMatch = true;
    } else {
      let newUser = {
        username: this.username,
        password: this.password,
        country: this.country,
        account: {
          funds: 0,
          transaction: [],
          safes: [],
          debitCard: null
        }
      };
    }
  }
}
