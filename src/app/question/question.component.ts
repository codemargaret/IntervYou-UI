import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Angular2TokenService } from "angular2-token";
import { Http } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  questions;

  constructor( public authTokenService:Angular2TokenService,
    public router:Router,
    private http: Http) {
      http.get('http://localhost:3000/questions.json')
      .subscribe(
        data => {
      this.questions = data.json();
    },
      err => console.error(err)
      );
    }

  ngOnInit() {
  }

}
