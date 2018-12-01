import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SubmitComponent } from './submit/submit.component';
import { HttpModule } from '@angular/http';
import { HoverDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    ScrollComponent,
    SubmitComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
