import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {OnlineBankingUserService} from "../../services/OnlineBankingUser.service";
import {currentUser, safeToOpen, setCurrentUser, setSafeToOpen} from "../../globals/globals";

@Component({
  selector: 'app-open-safe-modal',
  templateUrl: './open-safe-modal.component.html',
  styleUrls: ['./open-safe-modal.component.css']
})
export class OpenSafeModalComponent {
  safeKeygen?: string;

  constructor(public modalRef: MdbModalRef<OpenSafeModalComponent>, private userService: OnlineBankingUserService) {
  }

  closeModal() {
    this.modalRef.close();
  }

  openSafe() {
    if (safeToOpen.keygen !== this.safeKeygen) {
      alert("Save keygen not correct")
    } else {
      for(let i = 0; i < currentUser.account?.safes?.length!; i++) {
        if(safeToOpen.safeName == currentUser.account?.safes![i].safeName) {
          currentUser.account!.funds! += currentUser.account!.safes![i].funds!;
          currentUser.account!.safes![i].funds! = 0;
          currentUser.account?.safes?.splice(i,1);
        }
      }
      this.userService.updateUser(currentUser).subscribe(
        (response: boolean) => {
        });

      setSafeToOpen(null);
    }
  }
}
