import { Component } from '@angular/core';
import {DummySafeData} from "../models/dummySafeData";

@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.css']
})
export class SafesComponent {
  safes: DummySafeData[] = [{safeName: "Holidays", debit: 500.0},
    {safeName: "University", debit: 3000.0},
    {safeName: "Bills", debit: 200.0}]
}
