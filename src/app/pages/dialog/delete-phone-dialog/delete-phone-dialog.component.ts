import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '../../../entity/Phone';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-phone-dialog',
  templateUrl: './delete-phone-dialog.component.html',
  styleUrls: ['./delete-phone-dialog.component.css']
})
export class DeletePhoneDialogComponent {
  @Input() phone: Phone;

  @Output() action = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  confirm() {
    this.action.emit();
    this.activeModal.close();
  }
}