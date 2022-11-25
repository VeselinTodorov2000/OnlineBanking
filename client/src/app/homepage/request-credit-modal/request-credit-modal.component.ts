import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-request-credit-modal',
  templateUrl: './request-credit-modal.component.html',
  styleUrls: ['./request-credit-modal.component.css']
})
export class RequestCreditModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RequestCreditModalComponent>) {
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
}
