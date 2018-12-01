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
  difficulty = [];
  counter = 1;
  constructor(private questionsService: QuestionsService) {}

  getQuestion(difficulty) {
    this.questionsService.getQuestions(difficulty).subscribe(q => {
      
      this.answers = q[0].incorrect_answer;
      this.answers.push(q[0].correct_answer);
      this.question = q[0].question;
      this.difficulty = q[0].difficulty;
      console.log(this.question, this.answers, this.difficulty)     
    })
  }

  ngOnInit() {
    
    // this.answers = this.questionsService.answers;
    this.getQuestion('easy')
    
  }

  nextQuestion() {
    
    if (this.counter < 4) {
      this.counter++;
      this.getQuestion('easy');
    } else if (this.counter > 7) {
      this.counter++;
      this.getQuestion('hard');
    } else {
      this.counter++;
      this.getQuestion('medium');
    }
    
    console.log(this.counter);
  }

  restart() {
    this.ngOnInit()
  }

}
