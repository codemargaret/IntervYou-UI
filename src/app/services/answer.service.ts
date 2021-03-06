import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewAnswer } from '../new-answer.model';
import { ActivatedRoute, Params } from '@angular/router';
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
export class AnswerService {
  answers: Observable<any>;
  questionId: number = null;

  constructor(private answerService: Angular2TokenService, private route: ActivatedRoute) {
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
    });

    this.answers = this.answerService.get(`questions/${this.questionId}/answers`)
  }

  addAnswer(newAnswer:NewAnswer) {
    console.log(newAnswer);
    this.answerService.post(`questions/${this.questionId}/answers`, newAnswer);
  }

}
