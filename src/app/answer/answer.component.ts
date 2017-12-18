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
  questions;
  questionId: number = null;

  constructor(public authTokenService:Angular2TokenService,
    public router:Router,
    private http: Http,
    private route: ActivatedRoute,
    private location: Location) {
      http.get('http://localhost:3000/questions.json')
      .subscribe(
        data => {
          this.questions = data.json();
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
