import { Component } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-sending-money-modal',
  templateUrl: './sending-money-modal.component.html',
  styleUrls: ['./sending-money-modal.component.css']
})
export class SendingMoneyModalComponent {
  constructor(public modalRef: MdbModalRef<SendingMoneyModalComponent>) {
  }

  closeModal() {
    this.modalRef.close();
  }
}
