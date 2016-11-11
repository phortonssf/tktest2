import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Login } from '../login/login';
import { Register } from '../register/register';
import { Lobby } from '../lobby/lobby';

/*
  Generated class for the Landing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class Landing {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  
  ionViewDidLoad() {
    console.log('Hello Landing Page');
  }
  
  login() {
    this.navCtrl.push(Login);
  }
  register() {
    this.navCtrl.push(Register);
  }
}
