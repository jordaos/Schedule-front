import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { People } from './../entity/People'
import { Phone } from '../entity/Phone';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleService {
  private API_URL = 'https://schedule-server132.herokuapp.com/peoples/'

  constructor(public http: Http) { }

  getAll() {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;
      this.http.get(url)
        .subscribe((result: any) => {
          let peoples: People[] = result.json()._embedded.peoples as People[];
          for (let i = 0; i < peoples.length; i++) {
            let phones: Array<Phone>;
            this.getPhones(peoples[i].id)
              .then((result: Array<Phone>) => {
                peoples[i].phones = result;
              })
              .catch((error: any) => {
                console.log("error while loading phones: " + error);
              });;
          }
          resolve(peoples);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  getPhones(id: number) {
    return new Promise((resolve, reject) => {
      let url = `${this.API_URL}/${id}/telefones`;
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json()._embedded.phones as Phone[]);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}