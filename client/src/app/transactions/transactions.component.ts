import {Component, OnInit} from '@angular/core';
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {HttpErrorResponse} from "@angular/common/http";
import {OnlineBankingUserService} from "../services/OnlineBankingUser.service";
import {TransactionModel} from "../models/transaction.model";
import {currentUser} from "../globals/globals";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions?: TransactionModel[];

  //criteria
  receiverIbanCriteria? = '';
  dateFromCriteria? : Date;
  dateToCriteria? : Date;
  onlyPositiveDebit? : boolean;

  ngOnInit(): void {
  }

  constructor(private userService: OnlineBankingUserService) {
  }

  performSearch() {
    var filter = {
      receiverIban: this.receiverIbanCriteria,
      dateFrom: this.dateFromCriteria,
      dateTo: this.dateToCriteria,
      positive: this.onlyPositiveDebit
    };

    this.transactions = currentUser?.account?.transactions?.filter(function (item) {
      if (item.receiverIban === undefined || item.receiverIban != filter.receiverIban) {
        return false;
      }
      if(item.issueDate!.valueOf() <= filter.dateFrom!.valueOf() || item.issueDate!.valueOf() >= filter.dateTo!.valueOf()) {
        return false;
      }
      if(filter.positive === true && item.funds! < 0) {
        return false;
      }
      return true;
    });
  }
}
