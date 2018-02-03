import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { People } from '../../../entity/People';

@Component({
  selector: 'app-show-people-dialog',
  templateUrl: './show-people-dialog.component.html',
  styleUrls: ['./show-people-dialog.component.css']
})
export class ShowPeopleDialogComponent {
  @Input() people: People;

  constructor(public activeModal: NgbActiveModal) {}
}