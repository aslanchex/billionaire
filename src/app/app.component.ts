import { Component, HostBinding } from '@angular/core';
import { QuestionsService } from './questions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private questionsService: QuestionsService) {}

  answers = [];
  question = [];
  difficulty = [];
  counter = 0;
  correct_answer = {};
  
  decodeHTML(html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  getQuestion(difficulty) {
    this.counter++;
    this.questionsService.getQuestions(difficulty).subscribe(q => {
      this.answers = q[0].incorrect_answer;
      this.correct_answer['text'] = q[0].correct_answer;
      this.answers.push(q[0].correct_answer);
      this.question = this.decodeHTML(q[0].question);
      this.difficulty = q[0].difficulty;
      this.answers.sort(() => Math.random() - 0.5); 
      this.correct_answer['index'] = this.answers.indexOf(q[0].correct_answer); 
    })
  }

  ngOnInit() {
    this.nextQuestion();
  }

  nextQuestion() {
    
    if (this.counter == 10) {
      this.ngOnInit();
    } else if (this.counter < 4) {
      this.getQuestion('easy');
    } else if (this.counter > 7) {
      this.getQuestion('hard');
    } else {
      this.getQuestion('medium');
    }  
  }
}
