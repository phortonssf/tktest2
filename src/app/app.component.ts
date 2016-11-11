import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// import { questionsJson } from '../data/questions.json';

import { Landing } from '../pages/landing/landing';
import { Lobby } from '../pages/lobby/lobby';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  //Using this function will cause a compile error, but it will not break the code.
  rootPage = window.localStorage.getItem("token") ? Lobby : Landing;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
