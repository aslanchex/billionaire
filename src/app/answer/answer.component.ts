import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() answer;
  // isMarked = false;

  onClick() {
    // console.log('Clicked');
    // this.isMarked = true;
  }

}
