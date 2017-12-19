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
  answers;
  questionId: number = null;

  constructor(public authTokenService:Angular2TokenService,
    public router:Router,
    private http: Http,
    private route: ActivatedRoute,
    private location: Location) {
      this.route.params.forEach((urlParameters) => {
        this.questionId = parseInt(urlParameters['id']);
      });
      
      http.get(`http://localhost:3000/questions/${this.questionId}/answers.json`)
      .subscribe(
        data => {
          this.answers = data.json();
      },
        err => console.error(err)
      );

      http.get(`http://localhost:3000/questions/${this.questionId}.json`)
      .subscribe(
        data => {
          this.question = data.json();
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
