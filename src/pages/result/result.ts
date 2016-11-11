import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

}
