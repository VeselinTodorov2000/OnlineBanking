import {Component, OnInit} from '@angular/core';
import {RequestCreditModalComponent} from "./request-credit-modal/request-credit-modal.component";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {SendingMoneyModalComponent} from "./sending-money-modal/sending-money-modal.component";
import {AllocateSafeModalComponent} from "./allocate-safe-modal/allocate-safe-modal.component";
import {OnlineBankingUserService} from "../services/OnlineBankingUser.service";
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {HttpErrorResponse} from "@angular/common/http";
import {SafeModel} from "../models/safe.model";
import {TransactionModel} from "../models/transaction.model";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  currentUser?: OnlinebankinguserModel;
  transactions?: [TransactionModel];
  creditAmount?: number;
  safesAmount?: number;
  balance?: number;

  modalRef: MdbModalRef<RequestCreditModalComponent> | null = null;

  constructor(private modalService: MdbModalService, private userService: OnlineBankingUserService) {
  }

  openRequestModal() {
    this.modalRef = this.modalService.open(RequestCreditModalComponent);
  }

  openSendMoneyModal() {
    this.modalRef = this.modalService.open(SendingMoneyModalComponent);
  }

  openAllocateToSafeModal() {
    this.modalRef = this.modalService.open(AllocateSafeModalComponent)
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  private getCurrentUser() {
    this.userService.getAdminUser().subscribe(
      (response: OnlinebankinguserModel) => {
        this.currentUser = response;
        this.transactions = this.currentUser?.account?.transactions?.sort(
          function (obj1, obj2): any {
            obj2.issueDate?.valueOf()! - obj1.issueDate?.valueOf()!
          });
        this.creditAmount = this.sumCredit(response.account?.transactions!);
        this.safesAmount = this.sumSafes(response.account?.safes!);
        this.balance = this.safesAmount! + this.currentUser.account?.funds! + this.creditAmount;
        console.log(this.currentUser);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private sumSafes(safeModels: [SafeModel]) {
    let sum = 0;
    for (var safe of safeModels) {
      sum = sum + safe.funds!;
    }
    return sum;
  }

  private sumCredit(transactionModels: [TransactionModel]) {
    let sum = 0
    for(var transaction of transactionModels) {
      if(transaction.receiverIban == "CREDIT") {
        sum = sum + transaction.funds!;
      }
    }
    return sum*-1;
  }
}
