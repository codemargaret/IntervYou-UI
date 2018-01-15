import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewQuestion } from '../new-question.model';
import { Angular2TokenService } from "angular2-token";
import { ActivatedRoute, Params } from '@angular/router';

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
export class QuestionService {
  questions: Observable<any>;

  questionId: number = null;

  constructor(private questionService: Angular2TokenService, private route: ActivatedRoute) {

    this.questions = this.questionService.get('questions');

    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
    });

  }

  addQuestion(newQuestion:NewQuestion) {
    this.questionService.post('questions', newQuestion);
  }

  editQuestion(questionToEdit:NewQuestion) {
    this.questionService.patch(`questions/${this.questionId}`, questionToEdit);
  }

  destroyQuestion() {

    this.questionService.delete(`questions/${this.questionId}`);
  }

}
