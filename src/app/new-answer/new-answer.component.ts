import { Component, OnInit } from '@angular/core';
import { AnswerService } from "../services/answer.service";
import { Http } from "@angular/http";
import { NewAnswer } from '../new-answer.model';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.sass'],
  providers: [ AnswerService ]
})
export class NewAnswerComponent implements OnInit {
  newAnswerModel = NewAnswer;

  constructor(private answerService: AnswerService) { }

  ngOnInit() {
  }

  submitAnswer(text: string) {
    var newAnswer: NewAnswer = new NewAnswer(text);
    this.answerService.addAnswer(newAnswer);
  }

}
