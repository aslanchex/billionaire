import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private app: AppComponent) {}

  ngOnInit() {}

  myEvent(event) {
    this.app.nextQuestion();
  }
}
