import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Question } from '../question/question';
import { Landing } from '../landing/landing';
import { History } from '../history/history';

import { RestSSFUsers } from '../../providers/rest-ssf-users';
import { TKTestQuestions } from '../../providers/tk-test-questions';
import { TKTestAnswers } from '../../providers/tk-test-answers';
/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class Lobby {

  constructor(public navCtrl: NavController,
              public SSFUsersRest: RestSSFUsers,
              public TKTestQuestionsServ: TKTestQuestions,
              public TKTestAnswersServ: TKTestAnswers) {
    TKTestQuestionsServ.all();
  }

  ionViewDidLoad() {
    console.log('Hello Lobby Page');
   
  }
  
  //get questions
  
  logoutApp() {
    this.SSFUsersRest.logout(window.localStorage.getItem('token'))
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.clear();
      this.navCtrl.setRoot(Landing);
    }, err => {
      //because this is logging the user out, we don't need to worry about this here.
      // alert("Something went really wrong.");
      window.localStorage.clear();
      this.navCtrl.setRoot(Landing);
    });
  }
  
  takeTest() {
    this.TKTestAnswersServ.resetAnswers();
    this.navCtrl.push(Question, {
      questionId: 1 
      console.log(questionId);
    });
  }
  
  toHistory() {
    this.navCtrl.push(History);
  }
  
}
