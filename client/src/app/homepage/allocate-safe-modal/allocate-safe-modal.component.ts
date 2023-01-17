import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {currentUser, validate} from "../../globals/globals";
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
  invalidCardInformation!: boolean;
  insufficientFunds!: boolean;

  constructor(public modalRef: MdbModalRef<AllocateSafeModalComponent>, private userService: OnlineBankingUserService) {
    this.invalidCardInformation = false;
    this.insufficientFunds = false;
  }

  allocateToSafe() {
    validate(currentUser.account!.debitCard!.cardNumber!.substr(0, 6));
    if (currentUser.account?.debitCard?.cardNumber?.trim() === this.cardNumber?.trim() &&
      currentUser.account?.debitCard?.cvv === this.cvv) {
      for (let i = 0; i < currentUser.account!.safes!.length; i++) {
        if (currentUser.account!.safes![i].safeName === this.safeName && currentUser.account?.funds! >= this.amount!) {
          currentUser.account!.funds! -= this.amount!;
          currentUser.account!.safes![i].funds! += this.amount!;

          this.userService.updateSafe(currentUser.account!.safes![i]).subscribe(
            (response: boolean) => {
              console.log(currentUser);
            });
          break;
        } else if (currentUser.account!.safes![i].safeName === this.safeName && currentUser.account?.funds! < this.amount!) {
          this.insufficientFunds = true;
        }
      }
    } else {
      this.invalidCardInformation = true;
      return;
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
