import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
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
  private API_URL = 'https://schedule-server132.herokuapp.com/peoples/';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(public http: Http) { }

  getAll() {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;
      this.http.get(url)
        .subscribe((result: Response) => {
          let peoples: People[] = result.json()._embedded.peoples as People[];
          for (let i = 0; i < peoples.length; i++) {
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

  find(id: number) {
    return new Promise((resolve, reject) => {
      let url = `${this.API_URL}/${id}`;
      this.http.get(url)
        .subscribe((result: Response) => {
          let people: People = result.json() as People;
          this.getPhones(people.id)
            .then((result: Array<Phone>) => {
              people.phones = result;
              resolve(people);
            })
            .catch((error: any) => {
              console.log("error while loading phones: " + error);
            });
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
        .subscribe((result: Response) => {
          resolve(result.json()._embedded.phones as Phone[]);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  create(people: People): Promise<People> {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;
      this.http.post(url, JSON.stringify(people), { headers: this.headers })
        .subscribe((result: Response) => {
          resolve(result.json() as People);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  update(people: People): Promise<People> {
    return new Promise((resolve, reject) => {
      let url = `${this.API_URL}/${people.id}`;
      this.http.put(url, JSON.stringify(people), { headers: this.headers })
        .subscribe((result: Response) => {
          resolve(result.json() as People);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  delete(people: People): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = `${this.API_URL}/${people.id}`;
      this.http.delete(url)
        .subscribe((result: Response) => {
          resolve(result);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}