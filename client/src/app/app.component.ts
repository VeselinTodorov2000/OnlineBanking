import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {OnlinebankinguserModel} from "./models/onlinebankinguser.model";
import {OnlineBankingUserService} from "./services/OnlineBankingUser.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser?: OnlinebankinguserModel;

  constructor(private router: Router, private userService: OnlineBankingUserService) {}

  newChange(): void {
    this.router.navigateByUrl('register');
  }
}
