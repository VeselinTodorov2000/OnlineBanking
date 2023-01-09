import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {currentUser, setCurrentUser} from "../../globals/globals";
import {OnlineBankingUserService} from "../../services/OnlineBankingUser.service";
import {OnlinebankinguserModel} from "../../models/onlinebankinguser.model";
import {TransactionModel} from "../../models/transaction.model";

@Component({
  selector: 'app-sending-money-modal',
  templateUrl: './sending-money-modal.component.html',
  styleUrls: ['./sending-money-modal.component.css']
})
export class SendingMoneyModalComponent implements OnInit {
  receiverIban?: string;
  amount?: number;
  reason?: string;
  creditPayment?: boolean;
  cardNumber?: string;
  expiryDate?: Date;
  cvv?: number;

  users?: OnlinebankinguserModel[];

  constructor(public modalRef: MdbModalRef<SendingMoneyModalComponent>, private userService: OnlineBankingUserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response: OnlinebankinguserModel[]) => {
        this.users = response;
      }
    )
  }

  closeModal() {
    this.modalRef.close();
  }

  sendMoney() : void{
    if (currentUser.account?.debitCard?.cardNumber?.trim() === this.cardNumber?.trim() &&
      currentUser.account?.debitCard?.cvv === this.cvv) {

      //credit payment
      if (this.creditPayment === true) {
        if (currentUser.account?.funds! >= this.amount!) {
          var transaction: TransactionModel = {
            funds: (-1) * this.amount!,
            issueDate: new Date(),
            receiverIban: 'CREDIT',
            reason: 'CREDIT PAYMENT'
          };

          currentUser.account!.funds! -= this.amount!;

          this.userService.addTransaction(transaction).subscribe(
            (response: TransactionModel) => {
              currentUser.account?.transactions?.push(response);
              setCurrentUser(currentUser);
              this.userService.updateUser(currentUser).subscribe(
                (response: boolean) => {
                });
            }
          );
          return;
        }

        //regular case
        for (var user of this.users!) {
          console.log(user.account?.iban === this.receiverIban && currentUser.account?.funds! >= this.amount!);
          if (user.account?.iban === this.receiverIban && currentUser.account?.funds! >= this.amount!) {
            var transaction: TransactionModel = {
              funds: (-1) * this.amount!,
              issueDate: new Date(),
              receiverIban: this.receiverIban,
              reason: this.reason
            };
            var receiverTransaction: TransactionModel = {
              funds: this.amount!,
              issueDate: new Date(),
              receiverIban: currentUser.account?.iban,
              reason: this.reason
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

            this.userService.addTransaction(receiverTransaction).subscribe(
              (response: TransactionModel) => {
                user.account?.transactions?.push(response);
                this.userService.updateUser(user).subscribe(
                  (response: boolean) => {
                    console.log(user);
                  });
              }
            );
            break;
          }
        }
      }
    }
    this.modalRef.close();
  }


}
