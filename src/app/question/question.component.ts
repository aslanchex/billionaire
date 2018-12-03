import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  decodeHTML(html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return String(txt.value);
  } 

  @Input() question= this.decodeHTML(this.question)
  @Input() counter
}
