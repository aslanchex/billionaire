import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SubmitComponent } from './submit/submit.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    ScrollComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
