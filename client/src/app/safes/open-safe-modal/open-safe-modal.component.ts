import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {OnlineBankingUserService} from "../../services/OnlineBankingUser.service";
import {currentUser, safeToOpen, setSafeToOpen} from "../../globals/globals";

@Component({
  selector: 'app-open-safe-modal',
  templateUrl: './open-safe-modal.component.html',
  styleUrls: ['./open-safe-modal.component.css']
})
export class OpenSafeModalComponent {
  safeKeygen?: string;
  wrongSafeKeygen!: boolean;

  constructor(public modalRef: MdbModalRef<OpenSafeModalComponent>, private userService: OnlineBankingUserService) {
    this.wrongSafeKeygen = false;
  }

  closeModal() {
    this.modalRef.close();
  }

  openSafe() {
    if (safeToOpen.keygen !== this.safeKeygen) {
      this.wrongSafeKeygen = true;
      return;
    } else {
      for(let i = 0; i < currentUser.account?.safes?.length!; i++) {
        if(safeToOpen.safeName == currentUser.account?.safes![i].safeName) {
          currentUser.account!.funds! += currentUser.account!.safes![i].funds!;
          currentUser.account!.safes![i].funds! = 0;
          // @ts-ignore
          this.userService.deleteSafe(currentUser.account!.safes[i]!.id).subscribe(
            (response: boolean) => {
            }
          )
          currentUser.account?.safes?.splice(i,1);
        }
      }
      this.userService.updateUser(currentUser).subscribe(
        (response: boolean) => {
        });

      setSafeToOpen(null);
    }


    this.closeModal();
  }
}
