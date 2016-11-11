import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Lobby } from '../lobby/lobby';

import { TKTestAnswers } from '../../providers/tk-test-answers';
/*
  Generated class for the Result page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class Result {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Result Page');
  }
  
  toLobby() {
    this.navCtrl.setRoot(Lobby);
  }

}
