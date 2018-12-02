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

  ngOnInit(){}

  ngDoCheck() {
    let scrolls = document.querySelectorAll('.scroll_item');
    if (this.app.counter != 1) {
        
      scrolls[this.app.counter-1].classList.add('active');
    } else {
      for (let index = 0; index < scrolls.length; index++) {
        scrolls[index].classList.remove('active')       
      }
    }   
  }
}
