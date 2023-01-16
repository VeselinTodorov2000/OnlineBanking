import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {OnlinebankinguserModel} from "../../models/onlinebankinguser.model";
import {SafeModel} from "../../models/safe.model";
import {currentUser, setCurrentUser} from "../../globals/globals";
import {OnlineBankingUserService} from "../../services/OnlineBankingUser.service";

@Component({
  selector: 'app-create-safe-modal',
  templateUrl: './create-safe-modal.component.html',
  styleUrls: ['./create-safe-modal.component.css']
})
export class CreateSafeModalComponent implements OnInit{
  currentUser?: OnlinebankinguserModel;
  safeName?: string;
  safeKeygen?: string;
  private newSafe?: SafeModel;

  constructor(public modalRef: MdbModalRef<CreateSafeModalComponent>, private userService: OnlineBankingUserService) {
  }

  closeModal() {
    this.modalRef.close();
  }

  ngOnInit(): void {
    this.currentUser = currentUser;
  }

  createSafe() {
    if(this.safeName == null || this.safeKeygen == null) {
      alert("Safe name and safe keygen should not be null");
    }
    else {
      var safeToCreate: SafeModel = {
        safeName: this.safeName,
        keygen: this.safeKeygen,
        funds: 0
      };

      this.userService.addSafe(safeToCreate).subscribe(
        (response: SafeModel) => {
          currentUser.account?.safes?.push(response);
          setCurrentUser(currentUser);
          this.userService.updateUser(currentUser).subscribe(
            (response: boolean) => {
              console.log(currentUser);
            });
        }
      );

      this.modalRef.close("Safe created");
    };
  }
}
