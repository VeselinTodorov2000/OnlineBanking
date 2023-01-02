import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {currentUser} from "../../globals/globals";

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

  constructor(public modalRef: MdbModalRef<RequestCreditModalComponent>) {
  }

  closeModal() {
    this.modalRef.close();
  }

  makeRequest() {
    if(currentUser.account?.debitCard?.cardNumber?.trim() === this.cardNumber?.trim() &&
      currentUser.account?.debitCard?.cvv === this.cvv) {
      let updatedUser = currentUser;
      // updatedUser.account?.funds =
      // currentUser.account?.funds = currentUser.account?.funds! + this.creditSize!*(1.02*this.years!);
    }

    this.closeModal();
  }
}
