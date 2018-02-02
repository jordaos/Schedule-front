import { Component, OnInit } from '@angular/core';

import { People } from './../../../entity/People'
import { PeopleService } from './../../../services/people.service';

@Component({
  selector: 'app-list-peoples',
  templateUrl: './list-peoples.component.html',
  styleUrls: ['./list-peoples.component.css']
})
export class ListPeoplesComponent {

  public peoples: Array<People> = new Array<People>();
  public filteredPeoples: Array<People> = new Array<People>();
  public isLoading = true;
  public haveError = false;

  constructor(
    private peopleService: PeopleService
  ) {
    this.peopleService.getAll()
      .then((result: Array<People>) => {
        this.peoples = result;
        this.assignCopy();

        this.isLoading = false;
      })
      .catch((error: any) => {
        this.isLoading = false;
        this.haveError = true;
        console.log(error);
      });
  }

  assignCopy() {
    this.filteredPeoples = Object.assign([], this.peoples);
  }

  filterItem(value) {
    if (!value) this.assignCopy(); //when nothing has typed
    this.filteredPeoples = Object.assign([], this.peoples).filter(
      People => (People.nome.toLowerCase().indexOf(value.toLowerCase()) > -1 || People.cpf.toLowerCase().indexOf(value.toLowerCase()) > -1)
    )
  }

  onDelete(people: People): void {
    this.peopleService.delete(people)
      .then((result: any) => {
        const index1: number = this.peoples.indexOf(people);
        if (index1 !== -1) {
          this.peoples.splice(index1, 1);
        }

        const index2: number = this.filteredPeoples.indexOf(people);
        if (index2 !== -1) {
          this.filteredPeoples.splice(index2, 1);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

}
