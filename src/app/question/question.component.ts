import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  questions;
  apiUrl;

  constructor(
    private http: Http) {
      this.apiUrl = environment.apiUrl;
      http.get(`${this.apiUrl}/questions`)
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
