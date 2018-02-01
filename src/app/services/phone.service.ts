import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { People } from './../entity/People'

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleService {
  private API_URL = 'https://schedule-server132.herokuapp.com/'

  constructor(public http: Http) { }

  getAll() {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'peoples/';
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json()._embedded.peoples as People[]);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}