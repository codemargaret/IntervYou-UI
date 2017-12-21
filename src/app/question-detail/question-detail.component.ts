import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Angular2TokenService } from "angular2-token";
import { Http } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { NewAnswerComponent } from '../new-answer/new-answer.component';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {
  question;
  answers;

  questionId: number = null;

  constructor(public authTokenService:Angular2TokenService,
    public router:Router,
    private http: Http,
    private route: ActivatedRoute) {
      this.route.params.forEach((urlParameters) => {
        this.questionId = parseInt(urlParameters['id']);
      });
      console.log(this.questionId);

      http.get(`http://localhost:3000/questions/${this.questionId}.json`)
        .subscribe(
        data => {
          this.question = data.json();
      },
        err => console.error(err)
      );

     http.get(`http://localhost:3000/questions/${this.questionId}/answers.json`)
     .subscribe(
        data => {
          this.answers = data.json();
      },
        err => console.error(err)
      );

    }

  ngOnInit() {

  }

}
