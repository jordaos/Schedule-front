import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Phone } from '../../../entity/Phone';
import { People } from '../../../entity/People';
import { PeopleService } from '../../../services/people.service';
import { PhoneService } from '../../../services/phone.service';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {

  public phones: Array<Phone>;
  public phone: Phone;
  public people: People;
  public dateStr: string = '';

  public cpfMask = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public phoneMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private peopleService: PeopleService,
    private phoneService: PhoneService,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) {
    this.phones = new Array<Phone>();
    this.phone = new Phone(0, '', '');
    this.people = new People(0, '', '', '', null, []);
  }

  addPhone() {
    this.phones.push(this.phone);
    this.phone = new Phone(0, '', '');
  }

  onlyNumber(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  deletePhone(index: number) {
    this.phones.splice(index, 1);
  }

  inputHaveError(input: any, mask?: boolean): boolean {
    if (mask) {
      let underscore: boolean = false;
      if (input.value) {
        underscore = input.value.includes('_');
      }
      return (input.dirty && input.touched && input.value && underscore);
    }
    return (input.invalid && input.dirty && input.touched && input.value);
  }

  inputIsValid(input: any, mask?: boolean): boolean {
    if (mask) {
      let underscore: boolean = false;
      if (input.value) {
        underscore = input.value.includes('_');
      }
      return (input.value && !underscore);
    }
    return (input.valid && input.value);
  }

  onSubmit(): void {
    let dateArr = this.dateStr.split("/");
    this.people.dataNascimento = new Date(+dateArr[2], +dateArr[1], +dateArr[0]);
    this.peopleService.create(this.people)
      .then((people: People) => {
        this.phones.forEach(phone => {
          phone.people = people;
          this.phoneService.create(phone)
            .catch((err: Error) => {
              console.log(err);
            });
        });
        this.router.navigate(['/']);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.activedRoute.params.forEach((params: Params) => {
      let id: number = +params['id'];// + para converter em number
      if (id) {
        this.peopleService.find(id)
          .then((people: People) => {
            let date: any = people.dataNascimento;
            let arrDate = date.split("-");
            this.dateStr = `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
            this.people = people;
            this.phones = people.phones;
          })
      }
    });
  }
}
