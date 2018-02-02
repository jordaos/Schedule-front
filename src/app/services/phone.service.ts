import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Phone } from './../entity/Phone'

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhoneService {
  private API_URL = 'https://schedule-server132.herokuapp.com/phones/';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(public http: Http) { }

  create(phone: Phone): Promise<Phone> {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;
      this.http.post(url, JSON.stringify(phone), { headers: this.headers })
        .subscribe((result: Response) => {
          resolve(result.json() as Phone);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}