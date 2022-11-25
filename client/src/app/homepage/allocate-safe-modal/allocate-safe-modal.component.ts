import { Component } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-allocate-safe-modal',
  templateUrl: './allocate-safe-modal.component.html',
  styleUrls: ['./allocate-safe-modal.component.css']
})
export class AllocateSafeModalComponent {
  constructor(public modalRef: MdbModalRef<AllocateSafeModalComponent>) {
  }

  closeModal() {
    this.modalRef.close();
  }
}
