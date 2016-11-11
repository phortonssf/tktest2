import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TKTestQuestions } from '../../providers/tk-test-questions';
/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class Question {
  questionId = undefined;
  testInfo = undefined;
  questionA = undefined;
  questionB = undefined;
  
  constructor(public navCtrl: NavController, 
              private navParams: NavParams,
              public TKTestQuestionsServ: TKTestQuestions) {
    this.questionId = navParams.get('questionId');
  }
  
  ionViewDidLoad() {
    var test = this;
    // this.testInfo = [
    //   {
    //     "Question_Number": 1,
    //     "Answer_ID": "B",
    //     "Text": "Rather than negotiate the things on which we disagree, I try to stress the things upon which we both agree.",
    //     "Style": "Accommodating"
    //   },{
    //     "Question_Number": 1,
    //     "Answer_ID": "A",
    //     "Text": "There are times when I let others take responsibility for solving the problem.",
    //     "Style": "Avoiding"
    //   }];
    this.testInfo = TKTestQuestionsServ.getQuestion(this.questionId);
    this.testInfo.forEach(function(infoDict) {
      if(infoDict.Answer_ID === "A")
        test.questionA = infoDict;
      if(infoDict.Answer_ID === "B") {
        test.questionB = infoDict;
      }
    });
  }
  
  
  submitAnswer() {
    nextQ(this.navCtrl, this.questionId);
  }
}

let nextQ = function(nav, index) {
  nav.push(Question, {
    questionId: ++index
  });
};
  