import { Directive, HostBinding, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('class.marked') isMarked = false;
  isSelected = false;
  
  @HostListener('click') onClick() {
    let marked = document.querySelectorAll('.marked');
   
    if (marked.length < 1 ) {
      this.isMarked = true;
      $('button').toggleClass('select')
      // select.classList.add('select')
      $('button').prop('disabled', false)
    } else {
      this.isMarked = false;
      $('button').toggleClass('select')
      $('button').prop('disabled', true)
    }
  }
}
