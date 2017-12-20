import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthDialogComponent } from "../auth-dialog/auth-dialog.component";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { NewQuestionComponent } from '../new-question/new-question.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }

  presentNewQuestionForm(){
    this.router.navigate(['/questions/new']);
  }
}
