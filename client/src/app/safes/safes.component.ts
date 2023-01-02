import {Component, OnInit} from '@angular/core';
import {currentUser} from "../globals/globals";
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";

@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.css']
})
export class SafesComponent implements OnInit{
  currentUser?: OnlinebankinguserModel;

  ngOnInit(): void {
    this.currentUser = currentUser;
  }
}
