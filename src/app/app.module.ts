import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChartModule } from 'ng2-chartjs2';

//States
import { Landing } from '../pages/landing/landing';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Lobby } from '../pages/lobby/lobby';
import { Question } from '../pages/question/question';
import { Result } from '../pages/result/result';
import { History } from '../pages/history/history';

//TKTest Rest Services
import { RestQuestions } from '../providers/rest-questions';
import { RestSSFUsers } from '../providers/rest-ssf-users';
import { RestTestResults } from '../providers/rest-test-results';

//TKTest Services
import { TKResultsButton } from '../providers/tk-results-button';
import { TKTestAnswers } from '../providers/tk-test-answers';
import { TKTestQuestions } from '../providers/tk-test-questions';

const injections = [
  MyApp,
  Landing,
  Login,
  Register,
  Lobby,
  Question,
  Result,
  History
]
@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    RestQuestions, RestSSFUsers, RestTestResults,
    TKResultsButton, TKTestAnswers, TKTestQuestions
  ]
})
export class AppModule {}