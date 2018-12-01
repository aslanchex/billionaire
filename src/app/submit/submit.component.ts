import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private app: AppComponent) {}

  ngOnInit() {
  }



  myEvent(event) {
    if (this.app.counter == 11) {
      this.app.counter = 1;
      this.app.restart()
    } else {
      this.app.nextQuestion()
    }    
  }
}
