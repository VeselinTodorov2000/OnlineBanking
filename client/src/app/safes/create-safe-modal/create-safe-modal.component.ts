import { Component } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-create-safe-modal',
  templateUrl: './create-safe-modal.component.html',
  styleUrls: ['./create-safe-modal.component.css']
})
export class CreateSafeModalComponent {
  constructor(public modalRef: MdbModalRef<CreateSafeModalComponent>) {
  }

  closeModal() {
    this.modalRef.close();
  }
}
