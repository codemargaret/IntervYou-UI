import { Component, OnInit } from '@angular/core';
import { EditAnswerService } from "../services/edit-answer.service";
import { NewAnswer } from '../new-answer.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.sass'],
  providers: [ EditAnswerService ]
})
export class EditAnswerComponent implements OnInit {
  answerModel = NewAnswer;
  questionId: number = null;
  answerId: number = null;

  constructor(private answerService: EditAnswerService, private route: ActivatedRoute) {
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['question_id']);
    });

    this.route.params.forEach((urlParameters) => {
      this.answerId = parseInt(urlParameters['id']);
    });
  }

  ngOnInit() {
  }

  updateAnswer(text: string) {
    var answerToUpdate: NewAnswer = new NewAnswer(text);

    this.answerService.editAnswer(answerToUpdate);
  }

  deleteAnswer() {
    this.answerService.destroyAnswer();
  }

}
