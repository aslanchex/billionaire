import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionsService]
})
export class AppComponent {
  
answers = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    // this.answers = this.questionsService.answers
    this.questionsService.getQuestions().subscribe(q => {
      console.log(q);
      this.answers = q;
    })
  }
}
