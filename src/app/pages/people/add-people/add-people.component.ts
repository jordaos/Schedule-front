import { Component, OnInit } from '@angular/core';
import { Phone } from '../../../entity/Phone';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent {

  public phones: Array<Phone>;
  public phone: Phone;
  
  constructor() {
    this.phones = new Array<Phone>();
    this.phone = new Phone(0, '', '');
  }

  addPhone() {
    this.phones.push(this.phone);
    this.phone = new Phone(0, '', '');
  }
}
