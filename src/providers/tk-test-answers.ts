import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TKTestAnswers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TKTestAnswers {

  constructor(public http: Http) {
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
  
  saveTest = function(test) {
    //var tempTests = $window.localStorage.tests === undefined ? [] : JSON.parse($window.localStorage.tests);
    //tempTests.push(test);
    //$window.localStorage.tests = JSON.stringify(tempTests);
    
    //TestResultsRest.save(test)
    // TODO: convert promise formatting
    // .then(function(res) {
    //   console.log(res);
    // }, function(err) {
    //   console.log(err);
    // });
  };
  
  getTests = function(token) {
    //return $window.localStorage.tests ?
    //JSON.parse($window.localStorage.tests) : [];
    return [];
    //return TestResultsRest.getAll(token);
    // TODO: convert promise formatting
    // .then(function(res) {
    //   console.log(res.data);
    //   return res.data;
    // }, function(err) {
    //   console.log(err);
    // });
  };
  
  setAnswers = function(answers) {
    this.answerCategories = answers;  
  };
}
