import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../services/question.service";
import { NewQuestion } from '../new-question.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.sass'],
  providers: [ QuestionService ]
})
export class EditQuestionComponent implements OnInit {

  newQuestionModel = NewQuestion;

  questionId: number = null;

  constructor(private questionService: QuestionService, private route: ActivatedRoute) {
    this.route.params.forEach((urlParameters) => {
      this.questionId = parseInt(urlParameters['id']);
    });
   }

  ngOnInit() {
  }

  updateQuestion(text: string) {
    var questionToUpdate: NewQuestion = new NewQuestion(text);

    this.questionService.editQuestion(questionToUpdate);
  }

  deleteQuestion() {
    this.questionService.destroyQuestion();
  }

}
