import { Component, OnInit, Host } from '@angular/core';
import { AppComponent } from '../app.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private app: AppComponent) {}

  ngOnInit() {}

  addContinueButton() {
    $('button').html('<p>Continue</p>');
    $('button').addClass('continue');
  }

  myEvent(event) {
    let ans = $('.answer');

    if ($('button').hasClass('continue') == false) {
      return new Promise((resolve, reject) => {
        for (let i = 0; i < ans.length; i++) {
          if (ans[i].classList.contains('marked')) {
            if (this.app.correct_answer['index'] == String(i)) {
              // console.log(i)
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
        //$('.continue').click(this.app.nextQuestion);
        this.app.counter = 0;
      }) 
    } else {
      // return new Promise((resolve, reject) => {
      //   // console.log(ansIsTrue)
      //   this.app.nextQuestion();
      //   resolve();
      // }).then(() => {
      //   button.innerHTML = '<p>OK</p>';
      //   button.classList.remove('continue', 'select');
      //   button.disabled = true;
      // })
      // //i just have been checking this way

      this.app.nextQuestion();        
      $('button').html('<p>OK</p>');
      $('button').removeClass('continue select');
      $('button').prop('disabled', true);
    }
  }
}
