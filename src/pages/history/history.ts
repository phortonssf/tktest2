import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Result } from '../result/result';

// import { RestTestResults } from '../../providers/rest-test-results';

import { TKResultsButton } from '../../providers/tk-results-button';
import { TKTestAnswers } from '../../providers/tk-test-answers';
/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class History {

  constructor(public navCtrl: NavController,
              public TKResultsButtonServ: TKResultsButton,
              public TKTestAnswersServ: TKTestAnswers) {}

  ionViewDidLoad() {
    console.log('Hello History Page');
    this.TKTestAnswersServ.getTests(window.localStorage.getItem("token"), window.localStorage.getItem("userId"))
    .map(res => res.json())
    .subscribe(res => {
      this.tests = res || [];
    }, err => {
      alert("Warning Will Robinson!");
      this.tests = [];
    });
  }
  tests = []
  
  goToResult(test) {
    var answers = {
      "competing": test.competing,
      "collaborating": test.collaborating,
      "compromising": test.compromising,
      "avoiding": test.avoiding,
      "accommodating": test.accommodating
    };
    this.TKTestAnswersServ.setAnswers(answers);
    this.TKResultsButtonServ.setShouldShowMenuButton(false);
    this.navCtrl.push(Result);
  }

}
