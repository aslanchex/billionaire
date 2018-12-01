import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('class.marked') isMarked = false;
  @HostBinding('class.select') isSelected = false;

  
  @HostListener('click') onClick() {
    let marked = document.querySelectorAll('.marked');
    // console.log(marked.length);
    if (marked.length < 1 ) {
      this.isMarked = true;
      this.isSelected = true;
    } else {
      this.isMarked = false;
      this.isSelected =  false; 
    }
  }
}
