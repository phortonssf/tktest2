import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Lobby } from '../lobby/lobby';

import { RestSSFUsers } from '../../providers/rest-ssf-users';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController,
              public SSFUsersRest: RestSSFUsers) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }
  
  //equivilant to $scope.user = {};
  user = {
    email: "aaa@aaa.com",
    password: "aaa"
  };
  
  //equivilant to $scope.signinForm = function(form) { ... };
  signinForm(form) {
    if(form.invalid) 
      return alert("Please fill in all of the required fields.");

    this.SSFUsersRest.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(Lobby);
    }, err => {
      alert("Warning Will Robinson!");
    });
  }
}
