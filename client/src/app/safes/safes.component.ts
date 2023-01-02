import {Component, OnInit} from '@angular/core';
import {currentUser, setSafeToOpen} from "../globals/globals";
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {OnlineBankingUserService} from "../services/OnlineBankingUser.service";
import {RequestCreditModalComponent} from "../homepage/request-credit-modal/request-credit-modal.component";
import {CreateSafeModalComponent} from "./create-safe-modal/create-safe-modal.component";
import {OpenSafeModalComponent} from "./open-safe-modal/open-safe-modal.component";
import {SafeModel} from "../models/safe.model";

@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.css']
})
export class SafesComponent implements OnInit {
  currentUser?: OnlinebankinguserModel;
  modalRef: MdbModalRef<CreateSafeModalComponent> | null = null;

  ngOnInit(): void {
    this.currentUser = currentUser;
  }

  constructor(private modalService: MdbModalService, private userService: OnlineBankingUserService) {
  }

  openCreateSafeModal() {
    this.modalRef = this.modalService.open(CreateSafeModalComponent);
  }

  openOpenSafeModel(safe: SafeModel) {
    setSafeToOpen(safe);
    this.modalRef = this.modalService.open(OpenSafeModalComponent);
  }
}
