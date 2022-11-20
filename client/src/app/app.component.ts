import {Component, OnInit} from '@angular/core';
import {OnlineBankingUser} from "./OnlineBankingUser";
import {LoginService} from "./login.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  public users: OnlineBankingUser[] | undefined;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.loginService.getOnlineBankingUsers().subscribe(
      (response: OnlineBankingUser[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
