import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  constructor(private app: AppComponent) { }

  // ngOnInit() {
  //   let scrolls = document.querySelectorAll('.scroll_item');
  //   console.log(scrolls[0])
  //   scrolls[0].classList.add('active');
  // }
  ngOnInit(){}
  
  ngDoCheck() {
    let scrolls = document.querySelectorAll('.scroll_item');
    if (this.app.counter < 11) {
        
      scrolls[this.app.counter-1].classList.add('active');
    } else {
      scrolls.forEach(item => item.classList.remove('active'))
    }   
  }
}
