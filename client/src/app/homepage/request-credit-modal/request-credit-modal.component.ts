import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-request-credit-modal',
  templateUrl: './request-credit-modal.component.html',
  styleUrls: ['./request-credit-modal.component.css']
})
export class RequestCreditModalComponent {
  constructor(public modalRef: MdbModalRef<RequestCreditModalComponent>) {
  }

  closeModal() {
    this.modalRef.close();
  }
}
