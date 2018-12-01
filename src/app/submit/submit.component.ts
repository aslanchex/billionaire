import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
  }

  myEvent(event) {
    console.log(event)
  }
}
