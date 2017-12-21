import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewAnswer } from '../new-answer.model';
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
export class AnswerService {
  answers: Observable<any>;
  headers: Headers;
  options: RequestOptions;
  questionId: number = null;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.headers = new Headers({'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9'});

    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
    });

    this.answers = this.http.get(`http://localhost:3000/questions/${this.questionId}/answers.json`)

  }

  addAnswer(newAnswer:NewAnswer) {
        console.log(newAnswer);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let x = this.http.post(`http://localhost:3000/questions/${this.questionId}/answers`, newAnswer, options);
    x.subscribe(response =>{
      console.log(response);
    })
  }

}
