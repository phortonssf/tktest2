import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TKResultsButton provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TKResultsButton {

  constructor(public http: Http) {
    console.log('Hello TKResultsButton Provider');
    this.shouldShowButton = false
  }
  
  shouldShowButton = false
  
  
  setShouldShowMenuButton(show) {
    this.shouldShowButton = show;  
  }
  
  getShouldShowMenuButton() {
    return this.shouldShowButton;  
  }

}
