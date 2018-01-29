import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Angular2TokenService } from "angular2-token";
import { Http } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.sass']
})
export class AnswerComponent implements OnInit {
  question;
  answer;
  questionId: number = null;
  answerId: number = null;

  constructor(public authTokenService:Angular2TokenService,
    public router:Router,
    private http: Http,
    private route: ActivatedRoute,
    private location: Location) {
      this.route.params.forEach((urlParameters) => {
        this.questionId = parseInt(urlParameters['question_id']);
      });

      this.route.params.forEach((urlParameters) => {
        this.answerId = parseInt(urlParameters['id']);
      });

      http.get(`https://nameless-oasis-87770.herokuapp.com/questions/${this.questionId}/answers/${this.answerId}.json`)
      .subscribe(
        data => {
          this.answer = data.json();
      },
        err => console.error(err)
      );

      http.get(`https://nameless-oasis-87770.herokuapp.com/questions/${this.questionId}.json`)
      .subscribe(
        data => {
          this.question = data.json();
      },
        err => console.error(err)
      );
    }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['question_id']);
      console.log(this.questionId);
    });

    this.route.params.forEach((urlParameters) => {
      this.answerId = parseInt(urlParameters['id']);
      console.log(this.answerId);
    });
  }

}
