import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { QuestionService } from "../services/question.service";
import { Http } from "@angular/http";
import { Angular2TokenService } from "angular2-token";
import { NewQuestion } from '../new-question.model';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.sass'],
  providers: [ QuestionService ]
})
export class NewQuestionComponent implements OnInit {

newQuestionModel = NewQuestion;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {

  }

  submitQuestion(text: string) {
    var newQuestion: NewQuestion = new NewQuestion(text);

    this.questionService.addQuestion(newQuestion);
  }

}
