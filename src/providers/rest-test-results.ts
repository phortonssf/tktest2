import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestTestResults provider.

  See this.https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestTestResults {

  constructor(public http: Http) {
    console.log('Hello RestTestResults Provider');
  }  
  baseUrl = 'https://tk-backend-spectrevolve.c9users.io/api/'
  path = 'TestResults/'
  
  // get(token) {
  //   return this.http.get(
  //     this.baseUrl + this.path + 
  //     '?access_token=' + token 
  //   );
  // }
  
  save(test, token) {
    return this.http.post(
      this.baseUrl + this.path + 
        '?access_token=' + token,
      test
    );
  }
  
  getAll(token, userId) {
    return this.http.get(
      this.baseUrl + this.path + 
        '?filter[where][userID]=' + userId +
        '&access_token=' + token
    );
  }

}
