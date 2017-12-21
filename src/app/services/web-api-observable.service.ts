import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewQuestion } from '../new-question.model';

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
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9'});

    this.questions = this.http.get('http://localhost:3000/questions');

  }

  addQuestion(newQuestion:NewQuestion) {
        console.log(newQuestion);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let x = this.http.post('http://localhost:3000/questions',newQuestion, options);
    x.subscribe(response =>{
      console.log(response);
    })
  }

}
