import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestQuestions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestQuestions {

  constructor(public http: Http) {
    console.log('Hello RestQuestions Provider');
  }
  
  baseUrl = 'https://tk-backend-spectrevolve.c9users.io/api/'
  path = 'Questions/'
 
  get(token) {
    return this.http.get(
      this.baseUrl + this.path + 
        '?access_token=' + token 
    );
  }
}
