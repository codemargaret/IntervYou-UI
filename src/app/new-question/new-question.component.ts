import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Http } from "@angular/http";
import { Angular2TokenService } from "angular2-token";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.sass']
})
export class NewQuestionComponent implements OnInit {

  stuff;

  questionParams = {
    text: '',
  }

  constructor(public authService:AuthService, public tokenService:Angular2TokenService, public router:Router, private http: Http, private route: ActivatedRoute,
  private location: Location) {
    this.stuff = http.post('http://localhost:3000/questions', this.questionParams).subscribe(
      err => console.error(err),
      () => console.log(this.stuff)
    );
  }

  ngOnInit() {
    this.route.snapshot.data['text'];
    console.log(this.route.snapshot.data['text']);
  }

}
