import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from "./services/auth.service";
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from "./guards/auth.guard";
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionService } from "./services/question.service";
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionDetailComponent,
    NewQuestionComponent,
    NewAnswerComponent,
    FooterComponent,
    HomeComponent,
    EditQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [ Angular2TokenService, AuthService, AuthGuard, QuestionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
