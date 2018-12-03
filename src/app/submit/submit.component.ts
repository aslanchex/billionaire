import { Component, OnInit, Host } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private app: AppComponent) {}

  ngOnInit() {}

  addContinueButton() {
    let button = document.querySelector('button');
    button.innerHTML = '<p>Continue</p>';
    button.classList.add('continue');
  }

  myEvent(event) {
    let button = document.querySelector('button');
    let ans = document.querySelectorAll('.answer');

    if (button.classList.contains('continue') == false) {
      return new Promise((resolve, reject) => {
        for (let i = 0; i < ans.length; i++) {
          if (ans[i].classList.contains('marked')) {
            if (this.app.correct_answer['index'] == String(i)) {
              console.log(i)
              ans[i].classList.remove('marked');
              ans[i].classList.add('right');
            } else {
              ans[i].classList.remove('marked');
              ans[i].classList.add('wrong');
              reject();
            }
          }
        }
        resolve();
      }).then(()=>{
        this.addContinueButton();
      },
      ()=>{
        this.addContinueButton();
        $('.continue').click(this.app.ngOnInit);
        this.app.counter = 0;
      }) 
    } else {
      return new Promise((resolve, reject) => {
        // console.log(ansIsTrue)
        this.app.nextQuestion();
        resolve();
      }).then(() => {
        button.innerHTML = '<p>OK</p>';
        button.classList.remove('continue', 'select');
        button.disabled = true;
      })
    }
  }
}
