import { Component } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {currentUser, setCurrentUser} from "../../globals/globals";
import {TransactionModel} from "../../models/transaction.model";
import {OnlineBankingUserService} from "../../services/OnlineBankingUser.service";

@Component({
  selector: 'app-allocate-safe-modal',
  templateUrl: './allocate-safe-modal.component.html',
  styleUrls: ['./allocate-safe-modal.component.css']
})
export class AllocateSafeModalComponent {
  safeName?: string;
  amount?: number;
  cardNumber?: string;
  expiryDate?: Date;
  cvv?: number;

  constructor(public modalRef: MdbModalRef<AllocateSafeModalComponent>, private userService: OnlineBankingUserService) {
  }

  allocateToSafe() {
    if (currentUser.account?.debitCard?.cardNumber?.trim() === this.cardNumber?.trim() &&
      currentUser.account?.debitCard?.cvv === this.cvv) {
      for(let i = 0; i < currentUser.account!.safes!.length; i++) {
        console.log(currentUser.account!.safes![i].safeName === this.safeName && currentUser.account?.funds! >= this.amount!);
        if(currentUser.account!.safes![i].safeName === this.safeName && currentUser.account?.funds! >= this.amount!) {
          currentUser.account!.funds! -= this.amount!;
          currentUser.account!.safes![i].funds! += this.amount!;

          this.userService.updateSafe(currentUser.account!.safes![i]).subscribe(
            (response: boolean) => {
              console.log(currentUser);
            });
          break;
        }
      }
    }


    this.userService.updateUser(currentUser).subscribe(
      (response: boolean) => {
        console.log(currentUser);
      });

    this.closeModal();
  }

  closeModal() {
    this.modalRef.close();
  }
}
