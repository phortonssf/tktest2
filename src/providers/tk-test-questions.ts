import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { RestQuestions } from './rest-questions';

/*
  Generated class for the TKTestQuestions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TKTestQuestions {

  constructor(public http: Http,
              public QuestionsRest: RestQuestions) {
    console.log('Hello TKTestQuestions Provider');
  }
  
  questions = []
  
  all() {
    //call all the questions
    this.QuestionsRest.get(window.localStorage.getItem("token"))
    .map(res => res.json())
    .subscribe(res => {
      this.questions = res;
    }, err => {
      alert("Something went really wrong.");
    });
  }
  
  getQuestion(questionId) {
    var results = [];
    this.questions.forEach(function(question) {
      if(question.Question_Number == questionId)
        results.push(question);
    });
    return results;
  }

}
