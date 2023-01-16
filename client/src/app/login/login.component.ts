import {Component} from '@angular/core';
import {OnlineBankingUserService} from "../services/OnlineBankingUser.service";
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {HttpErrorResponse} from "@angular/common/http";
import {setCurrentUser} from "../globals/globals";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string | null;
  password?: string | null;
  incorrectUser!: boolean;

  constructor(private userService: OnlineBankingUserService, private router: Router, private titleService: Title) {
    titleService.setTitle("Login");
    this.incorrectUser = false;
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
          this.router.navigate(['/home']);
        } else {
          this.incorrectUser = true;
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
