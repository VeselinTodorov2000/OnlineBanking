import { Component } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-open-safe-modal',
  templateUrl: './open-safe-modal.component.html',
  styleUrls: ['./open-safe-modal.component.css']
})
export class OpenSafeModalComponent {
  constructor(public modalRef: MdbModalRef<OpenSafeModalComponent>) {
  }

  closeModal() {
    this.modalRef.close();
  }

}
