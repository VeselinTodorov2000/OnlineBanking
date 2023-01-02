import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {currentUser, setCurrentUser} from "../../globals/globals";
import {TransactionModel} from "../../models/transaction.model";
import {OnlineBankingUserService} from "../../services/OnlineBankingUser.service";

@Component({
  selector: 'app-request-credit-modal',
  templateUrl: './request-credit-modal.component.html',
  styleUrls: ['./request-credit-modal.component.css']
})
export class RequestCreditModalComponent {
  creditSize?: number;
  years?: number;
  cardNumber?: string;
  expiryDate?: Date;
  cvv?: number;

  constructor(public modalRef: MdbModalRef<RequestCreditModalComponent>, private userService: OnlineBankingUserService) {
  }

  closeModal() {
    this.modalRef.close();
  }

  makeRequest() {
    if (currentUser.account?.debitCard?.cardNumber?.trim() === this.cardNumber?.trim() &&
      currentUser.account?.debitCard?.cvv === this.cvv) {

      currentUser.account!.funds! = currentUser.account?.funds! + this.creditSize!;

      var transaction: TransactionModel = {
        funds: this.creditSize! * (1.02 ^ this.years!),
        issueDate: new Date(),
        receiverIban: 'CREDIT',
        reason: 'CREDIT_REQUEST'
      };

      this.userService.addTransaction(transaction).subscribe(
        (response: TransactionModel) => {
          currentUser.account?.transactions?.push(response);
          setCurrentUser(currentUser);
          this.userService.updateUser(currentUser).subscribe(
            (response: boolean) => {
              console.log(currentUser);
            });
        }
      );
    }
    this.closeModal();
  }
}
