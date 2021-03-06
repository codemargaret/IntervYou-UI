import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { NewAnswerComponent } from '../new-answer/new-answer.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {
  questions;
  question;
  answers;
  apiUrl;

  questionId: number = null;

  constructor(
    private http: Http,
    private route: ActivatedRoute) {
      this.route.params.forEach((urlParameters) => {
        this.questionId = parseInt(urlParameters['id']);
      });

      this.apiUrl = environment.apiUrl;
      http.get(`${this.apiUrl}/questions/${this.questionId}`)
        .subscribe(
        data => {
          this.question = data.json();
      },
        err => console.error(err)
      );

     http.get(`${this.apiUrl}/questions/${this.questionId}/answers`)
     .subscribe(
        data => {
          this.answers = data.json();
      },
        err => console.error(err)
      );

    }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
    });
  }

}
