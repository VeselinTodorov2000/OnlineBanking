import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string | null;
  password?: string | null;

  signIn() {
    console.log(document.getElementById('username')?.getRootNode());
    console.log(document.getElementById('password')?.getRootNode());
  }


}
