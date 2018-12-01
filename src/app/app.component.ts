import { Component, HostBinding } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  answers= [];
  question = [];
  counter= 1;
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    
    // this.answers = this.questionsService.answers;
    this.questionsService.getQuestions('easy').subscribe(q => {
      
      this.answers = q[0].incorrect_answer;
      this.answers.push(q[0].correct_answer);
      this.question = q[0].question;
      console.log(this.question)
      console.log(this.answers)        
    })
  }
}
