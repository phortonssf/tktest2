import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { RestTestResults } from './rest-test-results';

/*
  Generated class for the TKTestAnswers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TKTestAnswers {

  constructor(public http: Http,
              public TestResultsRest: RestTestResults) {
    console.log('Hello TKTestAnswers Provider');
  }
  
  answerCategories = {
    "competing": 0,
    "collaborating": 0,
    "compromising": 0,
    "avoiding": 0,
    "accommodating": 0
  }
  categoriesStack = []
  
  getAnswers() {
    return this.answerCategories;
  }
  
  saveAnswer(answerCategory) {
    this.answerCategories[answerCategory.toLowerCase()]++;
    this.categoriesStack.push(answerCategory);
  }
  
  resetAnswers() {
    for(var property in this.answerCategories) {
      if (this.answerCategories.hasOwnProperty(property)) {
        this.answerCategories[property] = 0;
      }
    }
  }
  
  eraseLastAnswer() {
    this.answerCategories[this.categoriesStack.pop().toLowerCase()]--;
  }
  
  saveTest = function(test, token) {
    this.TestResultsRest.save(test, token)
    .map(res => res.json())
    .subscribe(res => {
      //alls good
    }, err => {
      alert("Warning Will Robinson!");
    });
  };
  
  getTests(token, userId) {
    return this.TestResultsRest.getAll(token, userId);
  };
  
  setAnswers(answers) {
    this.answerCategories = answers;  
  };
}
