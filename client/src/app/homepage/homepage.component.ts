import {Component} from '@angular/core';
import {DummyTableData} from "./dummyTableData";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  rows: DummyTableData[] = [{"debit": -200, "receiver": "GB000 003 100", "date": "21.10.2019"},
    {"debit": 150, "receiver": "LV000 604 250", "date": "20.10.2019"},
    {"debit": -400, "receiver": "GB000 003 100", "date": "18.10.2019"}];
  debit: number = 10.25;
  iban: string = 'BG000 000 001';

  openRequestModal() {

  }
}
