import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { People } from '../../../entity/People';

@Component({
  selector: 'app-delete-people-dialog',
  templateUrl: './delete-people-dialog.component.html',
  styleUrls: ['./delete-people-dialog.component.css']
})
export class DeletePeopleDialogComponent {
  @Input() people: People;

  @Output() action = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  confirm() {
    this.action.emit();
    this.activeModal.close();
  }
}