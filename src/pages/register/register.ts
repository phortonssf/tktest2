import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Lobby } from '../lobby/lobby';

import { RestSSFUsers } from '../../providers/rest-ssf-users';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  constructor(public navCtrl: NavController,
              public SSFUsersRest: RestSSFUsers) {}

  ionViewDidLoad() {
    console.log('Hello Register Page');
  }
  
  //equivilant to $scope.user = {};
  user = {};
  
  //equivilant to $scope.signupForm = function(form) { ... };
  signupForm(form) {
    if(form.invalid) 
      return alert("Please fill in all of the required fields.");
    
    this.SSFUsersRest.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(Lobby);
    }, err => {
      alert("Warning Will Robinson!");
    });
  }

}
