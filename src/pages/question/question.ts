import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Result } from '../result/result';

import { TKTestQuestions } from '../../providers/tk-test-questions';
import { TKResultsButton } from '../../providers/tk-results-button';
import { TKTestAnswers } from '../../providers/tk-test-answers';

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
              public TKTestQuestionsServ: TKTestQuestions,
              public TKTestAnswersServ: TKTestAnswers,
              public TKResultsButtonServ: TKResultsButton) {
    this.questionId = navParams.get('questionId');
    this.isSubmitted = false;
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
    //testinfo is the 2 questions results array
    this.testInfo = this.TKTestQuestionsServ.getQuestion(this.questionId);
    this.testInfo.forEach(function(infoDict) {
      if(infoDict.Answer_ID === "A")
        test.questionA = infoDict;
      if(infoDict.Answer_ID === "B") {
        test.questionB = infoDict;
      }
    });
  }
  If question_number = questionID then display those questions
  
  /* From tk-testquestions service
   getQuestion(questionId) {
    var results = [];
    this.questions.forEach(function(question) {
      //Question Id starts at 1. If question number equals questionID push
      //into results array then return results.
      if(question.Question_Number == questionId)
        results.push(question);
    });
    return results;
  }*/
  
isSubmitted = false;
  
  buttonClicked(option) {
    var category = this["question" + option].Style;
    this.TKTestAnswersServ.saveAnswer(category);
    
    if(this.questionId == 30) {
      if(!this.isSubmitted) {
        this.isSubmitted = true;
        this.performRequest();
      }
    }
    else {
      //pushes to next question
      nextQ(this.navCtrl, this.questionId);
    }
  }
  //executes after 30th question
  performRequest() {
    var answersDict = this.TKTestAnswersServ.getAnswers();
    var date = new Date();
    answersDict["createDate"] = date.toUTCString();
    answersDict["userID"] = window.localStorage.getItem('userId');
    this.TKTestAnswersServ.saveTest(answersDict, window.localStorage.getItem('token'));
    this.TKResultsButtonServ.setShouldShowMenuButton(true);
    this.navCtrl.setRoot(Result);
  }
}
//Function that take nav and index value pushes to next question
let nextQ = function(nav, index) {
  //TODO remove this index increment by 4
  // index = 29;
  nav.push(Question, {
    questionId: ++index
  });
};
  