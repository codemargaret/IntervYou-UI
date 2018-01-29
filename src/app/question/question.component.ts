import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  questions;

  constructor(
    private http: Http) {
      http.get('https://nameless-oasis-87770.herokuapp.com/questions')
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
