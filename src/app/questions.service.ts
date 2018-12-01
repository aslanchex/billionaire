import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

  constructor(private http: Http) { }

  getQuestions() {
    return this.http.get('https://opentdb.com/api.php?amount=2&type=multiple').map(resp => resp.json().results).map(answers => {
      return answers.map(a => {
        return {
          question: a.question,
          correct_answer: a.correct_answer,
          incorrect_answer: a.incorrect_answers
        }
      })
    });
  }
}
