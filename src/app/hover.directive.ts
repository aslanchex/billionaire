import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('class.marked') isMarked = false;
  isSelected = false;
  
  @HostListener('click') onClick() {
    let marked = document.querySelectorAll('.marked');
    let select = document.querySelector('button')
    // console.log(marked.length);
    if (marked.length < 1 ) {
      this.isMarked = true;
      select.classList.add('select')
    } else {
      this.isMarked = false;
      select.classList.remove('select')
    }
  }
}
