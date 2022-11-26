import { Component } from '@angular/core';
import {DummyTableData} from "../models/dummyTableData";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  rows: DummyTableData[] = [{"debit": -200, "receiver": "GB000 003 100", "date": "21.10.2019"},
    {"debit": 150, "receiver": "LV000 604 250", "date": "20.10.2019"},
    {"debit": -400, "receiver": "GB000 003 100", "date": "18.10.2019"}];
}
