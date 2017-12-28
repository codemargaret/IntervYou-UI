import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewQuestion } from '../new-question.model';
import { Angular2TokenService } from "angular2-token";

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WebApiObservableService {
  questions: Observable<any>;

  constructor(private questionService: Angular2TokenService) {
    this.questions = this.questionService.get('questions');
  }

  addQuestion(newQuestion:NewQuestion) {
    console.log(newQuestion);
    this.questionService.post('questions', newQuestion);
  }

}
