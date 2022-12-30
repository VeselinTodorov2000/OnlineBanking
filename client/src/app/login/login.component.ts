import {Component} from '@angular/core';
import {OnlineBankingUserService} from "../services/OnlineBankingUser.service";
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {HttpErrorResponse} from "@angular/common/http";
import {currentUser, setCurrentUser} from "../globals/globals";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string | null;
  password?: string | null;

  constructor(private userService: OnlineBankingUserService) {
  }

  signIn() {
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
          setCurrentUser(users[0]);
          console.log(currentUser);
        } else {

          console.log("no user found");
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
